from ai.compliance_agent import load_compliance
import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


# Read historical incidents
def load_incidents():
    path = os.path.join("knowledge", "incidents.txt")

    with open(path, "r", encoding="utf-8") as file:
        return file.read()


def ask_gemini(question, sensor):

    # Load incident knowledge
    incident_data = load_incidents()
    compliance_data = load_compliance()

    prompt = f"""
You are an Industrial Safety AI Assistant.

Current Sensor Readings:
Gas: {sensor["gas"]} ppm
Temperature: {sensor["temperature"]} °C
Pressure: {sensor["pressure"]} kPa

Historical Incident Knowledge:

{incident_data}

Industrial Safety Regulations (Factory Act + OISD)

{compliance_data}

User Question:
{question}

Instructions:
1. Answer using the historical incidents if relevant.
2. Compare the current situation with previous incidents.
3. Suggest preventive actions.
4. Give a risk level (LOW/MEDIUM/HIGH/CRITICAL).
5. Keep the answer concise and professional.
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )
        return response.text
    
    except Exception as e:
        return (
            f"AI service temporarily unavailable.\n\n"
            f"Reason: {str(e)}\n\n"
            f"Current Sensor Status:\n"
            f"- Gas: {sensor['gas']} ppm\n"
            f"- Temperature: {sensor['temperature']} °C\n"
            f"- Pressure: {sensor['pressure']} kPa\n\n"
            f"Suggested Action:\n"
            f"- Monitor sensors continuously.\n"
            f"- Notify the safety officer if values increase.\n"
            f"- Retry the AI service later."
        )

