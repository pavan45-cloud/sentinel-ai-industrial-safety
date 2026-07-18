import os

def load_compliance():
    path = os.path.join("knowledge", "compliance.txt")

    with open(path, "r", encoding="utf-8") as file:
        return file.read()


def audit(sensor):
    violations = []

    score = 100

    gas = sensor.get("gas", 0)
    temperature = sensor.get("temperature", 0)
    pressure = sensor.get("pressure", 0)

    # Gas Check
    if gas > 70:
        violations.append("Gas concentration above safe limit")
        score -= 30

    # Temperature Check
    if temperature > 60:
        violations.append("Temperature exceeds OISD limit")
        score -= 20

    # Pressure Check
    if pressure > 130:
        violations.append("Pressure exceeds safe operating limit")
        score -= 20
    

    

    if score >= 90:
        status = "PASS"

    elif score >= 70:
        status = "WARNING"

    else:
        status = "FAIL"

    recommendations = []

    if gas > 70:
        recommendations.append("Evacuate affected area")

    if temperature > 60:
        recommendations.append("Reduce furnace temperature")

    if pressure > 130:
        recommendations.append("Inspect pressure valves")

    if not recommendations:
        recommendations.append("Plant is operating within compliance limits")

    return {
        "status": status,
        "score": score,
        "violations": violations,
        "recommendations": recommendations
    }