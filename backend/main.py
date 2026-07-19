from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ai.gemini_service import ask_gemini
from ai.decision_agent import ai_decision
from reports.report_generator import generate_report
import random
from ai.compliance_agent import audit
from agents.coordinator import master_ai
from vision.worker_detector import detect_workers as detect_workers_image
from fastapi import UploadFile, File
import shutil
import os
from fastapi.staticfiles import StaticFiles
from ultralytics import YOLO
import cv2
from fastapi.responses import StreamingResponse
from vision.live_camera import generate_frames
import vision.camera as cam
if os.getenv("RENDER") is None:
    cam.start_camera()
print("✅ Live camera module loaded")
from vision.ppe_detector import detect_ppe
from routes.compliance_routes import router as compliance_router
from routes.rag_routes import router as rag_router
from ai.compound_risk_engine import calculate_compound_risk
from ai.risk_forecast import predict_risk
from ai.ai_memory import update_memory, analyze_trend
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
model = None


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://sentinel-ai-industrial-safety.vercel.app",
        "https://sentinel-ai-industrial-safety-lcgml4llr-hema-pavan.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(compliance_router)
app.include_router(rag_router)


@app.get("/")
def root():
    return {"message": "SentinelAI Backend Running"}



@app.get("/sensors")
def sensors():

    sensor = {
        "gas": random.randint(20, 100),
        "temperature": random.randint(25, 70),
        "pressure": random.randint(90, 150),
    }

    # Store latest reading in AI Memory
    update_memory(sensor)

    # Analyze trend
    memory = analyze_trend()

    return {
        "sensor": sensor,
        "memory": memory
    }

class AIRequest(BaseModel):
    question: str


class DecisionRequest(BaseModel):
    sensor: dict
    permit: dict
    worker: dict
class MasterAIRequest(BaseModel):
    sensor: dict
    permit: dict
    worker: dict

@app.post("/ask-ai")
def ask_ai(request: AIRequest):

    sensor = {
        "gas": random.randint(20, 100),
        "temperature": random.randint(25, 70),
        "pressure": random.randint(90, 150),
    }

    answer = ask_gemini(request.question, sensor)

    return {
        "sensor": sensor,
        "answer": answer,
    }


@app.post("/decision-agent")
def decision(data: DecisionRequest):

    result = ai_decision(
        data.sensor,
        data.permit,
        data.worker,
        "MEDIUM"
    )

    return {
        "decision": result
    }


@app.post("/generate-report")
def generate_incident_report():

    sensor = {
        "gas": random.randint(20, 100),
        "temperature": random.randint(25, 70),
        "pressure": random.randint(90, 150)
    }

    decision = """
Risk Level: HIGH

Reason:
Gas concentration exceeded safe limit.

Recommended Actions:
- Evacuate workers
- Stop Hot Work
- Notify Emergency Team
"""

    message = generate_report(sensor, decision)

    return {
        "message": message
    }

@app.get("/compliance-audit")
def compliance():

    sensor = {
        "gas": random.randint(20,100),
        "temperature": random.randint(25,70),
        "pressure": random.randint(90,150),
    }

    result = audit(sensor)

    return {
        "sensor": sensor,
        "audit": result
    }

@app.post("/master-ai")
def master_ai_api(data: MasterAIRequest):

    try:

        ppe = detect_ppe()

        print("PPE =", ppe)

        result = master_ai(
            data.sensor,
            data.permit,
            data.worker,
            ppe
        )

        return result

    except Exception as e:

        import traceback

        traceback.print_exc()

        return {
            "error": str(e)
        }

@app.post("/detect-workers")
def detect_workers_api(file: UploadFile = File(...)):

    os.makedirs("uploads", exist_ok=True)

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = detect_workers_image(file_path)

    return result

from vision import camera as cam

@app.get("/detect-workers")
def detect_workers_live():

    results = cam.latest_results

    if results is None:
        return {"workers": 0}

    worker_count = 0

    for box in results[0].boxes:

        confidence = float(box.conf[0])

        if confidence < 0.5:
            continue

        cls = int(box.cls[0])

        label = model.names[cls]

        if label == "Person":
            worker_count += 1

    return {"workers": worker_count}

@app.get("/video-feed")
def video_feed():
    return StreamingResponse(
        generate_frames(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )
@app.get("/ppe")
def ppe():

    print("\n===== /ppe API HIT =====")

    data = detect_ppe()

    print("Returned:", data)

    return data

class CompoundRiskRequest(BaseModel):

    sensor: dict

    permit: dict

    ppe: dict

    worker: dict


@app.post("/compound-risk")
def compound_risk(data: CompoundRiskRequest):

    worker_zone = data.worker.get("zone", "Unknown")
    worker_count = data.worker.get("count", 1)

    shift = data.worker.get("shift", "Day")

    maintenance = data.permit.get("maintenance", False)

    equipment_health = data.permit.get(
        "equipment_health",
        random.randint(70, 100)
    )

    result = calculate_compound_risk(
        sensors=data.sensor,
        permits=data.permit,
        ppe=data.ppe,
        worker_zone=worker_zone,
        worker_count=worker_count,
        shift=shift,
        maintenance=maintenance,
        equipment_health=equipment_health,
    )
    forecast = predict_risk(result["score"])
    result["forecast"] = forecast

    return result

@app.post("/incident-prediction")
def incident_prediction(data: CompoundRiskRequest):

    worker_zone = data.worker.get("zone", "Unknown")
    worker_count = data.worker.get("count", 1)

    shift = data.worker.get("shift", "Day")

    maintenance = data.permit.get("maintenance", False)

    equipment_health = data.permit.get(
        "equipment_health",
        random.randint(70, 100)
    )

    result = calculate_compound_risk(
        sensors=data.sensor,
        permits=data.permit,
        ppe=data.ppe,
        worker_zone=worker_zone,
        worker_count=worker_count,
        shift=shift,
        maintenance=maintenance,
        equipment_health=equipment_health,
    )

    forecast = predict_risk(result["score"])

    return {
        "current_score": result["score"],
        "current_level": result["level"],
        "prediction": forecast,
        "recommendations": result["recommendations"]
    }