import random


def predict_risk(score):
    if score >= 80:
        risk15 = min(100, score + random.randint(2, 8))
        risk30 = min(100, score + random.randint(5, 12))
        risk60 = min(100, score + random.randint(8, 18))

    elif score >= 60:
        risk15 = min(100, score + random.randint(0, 6))
        risk30 = min(100, score + random.randint(2, 10))
        risk60 = min(100, score + random.randint(5, 15))

    else:
        risk15 = max(0, score + random.randint(-3, 4))
        risk30 = max(0, score + random.randint(-2, 6))
        risk60 = max(0, score + random.randint(0, 10))

    return {
        "15_min": risk15,
        "30_min": risk30,
        "60_min": risk60,
        "explosion_probability": min(100, int(score * 1.1)),
        "equipment_failure_probability": min(100, int(score * 0.9)),
    }