def calculate_compound_risk(
    sensors,
    permits,
    ppe,
    worker_zone,
    worker_count=1,
    shift="Day",
    maintenance=False,
    equipment_health=90
):
    score = 0
    reasons = []
    recommendations = []

    gas = sensors["gas"]
    temp = sensors["temperature"]
    pressure = sensors["pressure"]

    # -----------------------------
    # Gas
    # -----------------------------
    if gas >= 90:
        score += 30
        reasons.append("Critical Gas Concentration")

    elif gas >= 70:
        score += 20
        reasons.append("High Gas")

    elif gas >= 50:
        score += 10
        reasons.append("Moderate Gas")

    # -----------------------------
    # Temperature
    # -----------------------------
    if temp >= 70:
        score += 20
        reasons.append("Critical Temperature")

    elif temp >= 55:
        score += 12
        reasons.append("High Temperature")

    # -----------------------------
    # Pressure
    # -----------------------------
    if pressure >= 150:
        score += 20
        reasons.append("Critical Pressure")

    elif pressure >= 130:
        score += 10
        reasons.append("High Pressure")

    # -----------------------------
    # Hot Work Permit
    # -----------------------------
    if permits.get("hot_work"):
        score += 15
        reasons.append("Hot Work Permit Active")

    # -----------------------------
    # PPE Compliance
    # -----------------------------
    if ppe.get("NO-Hardhat", 0) > 0:
        score += 10
        reasons.append("Hardhat Missing")

    if ppe.get("NO-Safety Vest", 0) > 0:
        score += 10
        reasons.append("Safety Vest Missing")

    if ppe.get("NO-Mask", 0) > 0:
        score += 8
        reasons.append("Mask Missing")

    # -----------------------------
    # Hazard Zone
    # -----------------------------
    hazard_zones = [
        "Gas Storage",
        "Boiler Area",
        "Tank Farm",
        "Compressor"
    ]

    if worker_zone in hazard_zones:
        score += 15
        reasons.append(f"Worker inside {worker_zone}")

    # -----------------------------
    # Crowding
    # -----------------------------
    if worker_count >= 5:
        score += 10
        reasons.append("High Worker Density")

    # -----------------------------
    # Night Shift
    # -----------------------------
    if shift.lower() == "night":
        score += 8
        reasons.append("Night Shift Operation")

    # -----------------------------
    # Maintenance
    # -----------------------------
    if maintenance:
        score += 10
        reasons.append("Maintenance Activity")

    # -----------------------------
    # Equipment Health
    # -----------------------------
    if equipment_health < 60:
        score += 15
        reasons.append("Equipment Health Critical")

    elif equipment_health < 80:
        score += 8
        reasons.append("Equipment Health Degrading")

    score = min(score, 100)

    # -----------------------------
    # Risk Level
    # -----------------------------
    if score >= 80:

        level = "CRITICAL"

        recommendations = [
            "Immediate Plant Shutdown",
            "Evacuate Workers",
            "Activate Emergency Team",
            "Cancel Active Permits",
            "Generate Incident Report"
        ]

    elif score >= 60:

        level = "HIGH"

        recommendations = [
            "Reduce Plant Load",
            "Inspect Equipment",
            "Alert Safety Officer",
            "Review Active Permits"
        ]

    elif score >= 30:

        level = "MEDIUM"

        recommendations = [
            "Increase Monitoring",
            "Inspect PPE Compliance",
            "Observe Equipment"
        ]

    else:

        level = "LOW"

        recommendations = [
            "Factory Operating Normally"
        ]

    confidence = min(95, 60 + len(reasons) * 5)

    explanation = (
        f"Risk classified as {level} because "
        + ", ".join(reasons)
        if reasons
        else "All industrial safety parameters are normal."
    )

    return {
        "score": score,
        "level": level,
        "confidence": confidence,
        "reasons": reasons,
        "recommendations": recommendations,
        "explanation": explanation
    }

def predict_risk(score):

    # Current probability
    next30 = min(100, score)

    # Risk increases over time if nothing is done
    next60 = min(100, score + 15)
    next120 = min(100, score + 30)

    # Trend
    if next120 >= 80:
        trend = "Rapidly Increasing"

    elif next120 >= 60:
        trend = "Increasing"

    elif next120 >= 30:
        trend = "Stable"

    else:
        trend = "Low"

    return {
        "next30": next30,
        "next60": next60,
        "next120": next120,
        "trend": trend
    }