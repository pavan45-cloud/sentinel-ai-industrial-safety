import os
import traceback
from pathlib import Path

from dotenv import load_dotenv
from groq import Groq

from ai.compliance_agent import load_compliance

# -----------------------------
# Load .env
# -----------------------------
env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=env_path)

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


# -----------------------------
# Load historical incidents
# -----------------------------
def load_incidents():
    path = os.path.join("knowledge", "incidents.txt")

    with open(path, "r", encoding="utf-8") as file:
        return file.read()


# -----------------------------
# Ask AI
# -----------------------------
def ask_llm(question, sensor):

    incident_data = load_incidents()
    compliance_data = load_compliance()

    prompt = f"""
You are SentinelAI's Industrial Safety Intelligence Agent.

Current Sensor Readings:
Gas: {sensor["gas"]} ppm
Temperature: {sensor["temperature"]} °C
Pressure: {sensor["pressure"]} kPa

Historical Incident Knowledge:
{incident_data}

Industrial Safety Regulations:
{compliance_data}

User Question:
{question}

Instructions:
1. Compare current sensor readings with previous industrial accidents.
2. Mention similar incidents.
3. Mention violated OISD / Factory Act rules.
4. Predict possible consequences.
5. Give preventive actions.
6. Give Risk Level (LOW / MEDIUM / HIGH / CRITICAL).
7. Keep the answer concise and professional.
"""

    try:

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are an Industrial Safety Expert.",
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            temperature=0.3,
            max_tokens=1000,
        )

        return response.choices[0].message.content

    except Exception:
        print("=" * 60)
        print("FULL GROQ ERROR")
        traceback.print_exc()
        print("=" * 60)

        return (
            "AI service temporarily unavailable.\n\n"
            "Please try again later."
        )