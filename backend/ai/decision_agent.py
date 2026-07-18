from ai.gemini_service import client

def ai_decision(sensor, permit, worker):
    prompt = f"""
    You are the Chief Industrial Safety Officer.

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

    Return ONLY in this format:

    Risk Level:
    Confidence:
    Reason:
    Actions:
    """
    try:
        response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
        )

        return response.text

    except Exception:
        return """
    AI service temporarily unavailable.

    Safety Decision:
    - Stop Hot Work
    - Evacuate Zone A
    - Notify Safety Officer
    """