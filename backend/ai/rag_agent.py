import os

def load_incidents():

    path = os.path.join("knowledge", "incidents.txt")

    with open(path, "r", encoding="utf-8") as file:
        return file.readlines()


def search(sensor):

    incidents = load_incidents()

    matches = []

    gas = sensor.get("gas", 0)
    temp = sensor.get("temperature", 0)
    pressure = sensor.get("pressure", 0)

    for incident in incidents:

        text = incident.lower()

        if gas > 70 and "gas" in text:
            matches.append(incident.strip())

        elif temp > 60 and "temperature" in text:
            matches.append(incident.strip())

        elif pressure > 130 and "pressure" in text:
            matches.append(incident.strip())

    if len(matches) == 0:

        matches.append(
            "No similar historical incident found."
        )

    return {
        "matches": matches
    }