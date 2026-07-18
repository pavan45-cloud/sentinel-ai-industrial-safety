from ai.ai_memory import analyze_trend
from ai.decision_agent import ai_decision
from ai.compliance_agent import audit
from ai.gemini_service import ask_gemini
from agents.emergency_orchestrator import orchestrate
from ai.compound_risk_engine import calculate_compound_risk
from agents.intelligence_layer import build_intelligence_timeline
def master_ai(sensor, permit, worker, ppe):

    safety_result = ai_decision(sensor, permit, worker)
    risk_score = 0
    risk_reason = []
    #ppe = detect_ppe()

    #compliance_result = audit(sensor)

    # incident_result = ask_gemini(
    #     "Compare current sensor readings with previous industrial incidents.",
    #     sensor
    # )
    
    


    # Gas Risk
    if sensor["gas"] > 70:
        risk_score += 3
        risk_reason.append("High Gas")

    # Temperature Risk
    if sensor["temperature"] > 55:
        risk_score += 2
        risk_reason.append("High Temperature")

    # Pressure Risk
    if sensor["pressure"] > 130:
        risk_score += 2
        risk_reason.append("High Pressure")

    # Hot Work Permit
    if permit.get("hot_work"):
        risk_score += 2
        risk_reason.append("Hot Work Active")

    # PPE Violations
    if ppe.get("NO-Hardhat", 0) > 0:
        risk_score += 2
        risk_reason.append("No Hardhat")

    if ppe.get("NO-Safety Vest", 0) > 0:
        risk_score += 2
        risk_reason.append("No Safety Vest")

    if ppe.get("NO-Mask", 0) > 0:
        risk_score += 1
        risk_reason.append("No Mask")

    # Too Many Workers
    if worker.get("count", 1) > 15:
        risk_score += 2
        risk_reason.append("Crowded Work Area")
    
    # Compound Risk Detection
    compound_reasons = []

    if sensor["gas"] > 70 and permit.get("hot_work"):
        compound_reasons.append("High Gas + Hot Work")
        risk_score += 3

    if sensor["temperature"] > 55 and worker["zone"] == "Blast Furnace":
        compound_reasons.append("High Temperature + Worker in Blast Furnace")
        risk_score += 2

    if sensor["pressure"] > 130 and permit["status"] == "Active":
        compound_reasons.append("Pressure Risk During Active Permit")
        risk_score += 2

    if ppe.get("NO-Hardhat", 0) > 0:
        compound_reasons.append("Worker Without Hardhat")

    if ppe.get("NO-Safety Vest", 0) > 0:
        compound_reasons.append("Worker Without Safety Vest")

    if ppe.get("NO-Mask", 0) > 0:
        compound_reasons.append("Worker Without Mask")
    
    # Final Decision
    if risk_score >= 10:
        final_risk = "CRITICAL"

    elif risk_score >= 6:
        final_risk = "HIGH"

    elif risk_score >= 3:
        final_risk = "MEDIUM"

    else:
        final_risk = "LOW"

    
    recommendation = []

    if final_risk == "CRITICAL":
        recommendation = [
            "Stop Hot Work",
            "Evacuate Workers",
            "Notify Fire Team",
            "Generate Incident Report"
        ]

    elif final_risk == "HIGH":
        recommendation = [
            "Inspect Area",
            "Reduce Plant Load",
            "Alert Safety Officer"
        ]

    else:
        recommendation = [
            "Continue Monitoring"
        ]
    
    triggered_agents = [
    "Decision Agent",
    "PPE Detection Agent",
    "Incident Intelligence Agent",
    "Compliance Agent",
    "Master AI Coordinator"
    ]
    # AI Memory
    memory = analyze_trend()

    # Compound Risk Engine
    compound_result = calculate_compound_risk(
    sensors=sensor,
    permits=permit,
    ppe=ppe,
    worker_zone=worker.get("zone", "Unknown"),
    worker_count=worker.get("count", 1),
    shift=worker.get("shift", "Day"),
    maintenance=permit.get("maintenance", False),
    equipment_health=permit.get("equipment_health", 90),
)

    # Emergency Response
    emergency = orchestrate(sensor, compound_result["level"])

    timeline = build_intelligence_timeline(
    sensor=sensor,
    permit=permit,
    worker=worker,
    ppe=ppe,
    compound_result=compound_result,
    emergency=emergency,
    )
    return {

        "final_risk": final_risk,

        "risk_score": risk_score,

        "compound_reasons": compound_reasons,

        "ai_summary": (
            f"{len(compound_reasons)} compound risk(s) detected. "
            f"Overall risk is {final_risk}. Immediate action is recommended."
        ),

        "confidence": compound_result.get("confidence", 90),

        "triggered_agents": triggered_agents,

        "evidence": {
            "Gas": sensor["gas"],
            "Temperature": sensor["temperature"],
            "Pressure": sensor["pressure"],
            "Hot Work": permit.get("hot_work"),
            "PPE": ppe
        },

        "recommendation": recommendation,

        "safety": safety_result,

        "ppe": ppe,

        "emergency": emergency,
        "memory": memory,

        "compound_risk": compound_result,

        "timeline": timeline
    }