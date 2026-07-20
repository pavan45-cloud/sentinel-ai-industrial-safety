from ai.llm_service import client
def ai_decision(sensor, permit, worker, final_risk):
    prompt = f"""
    You are the Chief Industrial Safety Officer.

    Overall Risk (Final Decision): {final_risk}

    Current Sensor Data:
    Gas: {sensor.get('gas', 0)}
    Temperature: {sensor.get('temperature', 0)}
    Pressure: {sensor.get('pressure', 0)}

    Worker:
    Count: {worker.get('count', 0)}
    Zone: {worker.get('zone', 'Unknown')}

    Permit:
    Type: {permit.get('type', 'Unknown')}
    Status: {permit.get('status', 'Unknown')}
    Hot Work: {permit.get('hot_work', False)}

    Use the provided Overall Risk as the FINAL risk classification.
    Do NOT calculate another risk level.
    Generate safety actions appropriate for the provided risk.

    Return ONLY in this format:

    Risk Level:
    Confidence:
    Reason:
    Actions:
    """

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are the Chief Industrial Safety Officer."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,
            max_tokens=700,
        )

        return response.choices[0].message.content

    except Exception:
        if final_risk == "CRITICAL":
            return """
    Safety Decision:
    - Stop Hot Work
    - Evacuate Workers
    - Notify Fire Team
    - Activate Emergency Protocol
    """

        elif final_risk == "HIGH":
            return """
    Safety Decision:
    - Reduce Plant Load
    - Inspect Equipment
    - Notify Safety Officer
    """

        elif final_risk == "MEDIUM":
            return """
    Safety Decision:
    - Continue Monitoring
    - Schedule Inspection
    - Verify Permit Compliance
    """

        else:
            return """
    Safety Decision:
    - Normal Operations
    """
        