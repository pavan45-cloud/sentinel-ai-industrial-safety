from collections import deque

# Store latest 20 sensor readings
sensor_history = deque(maxlen=20)


def update_memory(sensor):
    sensor_history.append({
        "gas": sensor["gas"],
        "temperature": sensor["temperature"],
        "pressure": sensor["pressure"]
    })


def get_memory():
    return list(sensor_history)


def classify(values, name):
    """
    Classify the trend using the last 5 readings.
    """

    if len(values) < 5:
        return f"{name}: Collecting data"

    last = values[-5:]

    increasing = all(last[i] < last[i + 1] for i in range(4))
    decreasing = all(last[i] > last[i + 1] for i in range(4))

    change = max(last) - min(last)

    if increasing:
        return f"{name}: Increasing"

    if decreasing:
        return f"{name}: Decreasing"

    if change <= 5:
        return f"{name}: Stable"

    return f"{name}: Fluctuating"


def analyze_trend():

    if len(sensor_history) < 5:

        return {
            "trend": ["Collecting sensor history..."],
            "prediction": "Waiting for sufficient data.",
            "risk": "UNKNOWN",
            "confidence": 0,
            "explanation": "At least 5 readings are required.",
            "recommendations": [],
            "gas_history": [x["gas"] for x in sensor_history],
            "temperature_history": [x["temperature"] for x in sensor_history],
            "pressure_history": [x["pressure"] for x in sensor_history],
        }

    gas = [x["gas"] for x in sensor_history]
    temp = [x["temperature"] for x in sensor_history]
    pressure = [x["pressure"] for x in sensor_history]

    trends = [
        classify(gas, "Gas"),
        classify(temp, "Temperature"),
        classify(pressure, "Pressure")
    ]

    latest_gas = gas[-1]
    latest_temp = temp[-1]
    latest_pressure = pressure[-1]

    score = 0

    if latest_gas > 85:
        score += 35
    elif latest_gas > 70:
        score += 20

    if latest_temp > 60:
        score += 30
    elif latest_temp > 50:
        score += 15

    if latest_pressure > 135:
        score += 25
    elif latest_pressure > 120:
        score += 10

    for t in trends:
        if "Increasing" in t:
            score += 10

    score = min(score, 100)

    if score >= 80:
        risk = "CRITICAL"
        prediction = "Industrial hazard escalating rapidly."
        recommendations = [
            "Shutdown equipment",
            "Evacuate workers",
            "Notify emergency response team",
            "Isolate gas supply"
        ]

    elif score >= 50:
        risk = "HIGH"
        prediction = "Unsafe trend detected."
        recommendations = [
            "Increase monitoring",
            "Inspect equipment",
            "Prepare emergency team"
        ]

    elif score >= 25:
        risk = "MEDIUM"
        prediction = "Minor abnormalities detected."
        recommendations = [
            "Continue monitoring",
            "Schedule inspection"
        ]

    else:
        risk = "LOW"
        prediction = "Plant operating normally."
        recommendations = [
            "Continue normal operations"
        ]

    explanation = (
        f"Gas={latest_gas}, Temperature={latest_temp}, "
        f"Pressure={latest_pressure}. "
        f"Overall AI confidence is {score}% based on sensor values "
        f"and recent trends."
    )

    return {
        "trend": trends,
        "prediction": prediction,
        "risk": risk,
        "confidence": score,
        "explanation": explanation,
        "recommendations": recommendations,
        "gas_history": gas,
        "temperature_history": temp,
        "pressure_history": pressure
    }