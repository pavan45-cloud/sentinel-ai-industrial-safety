

import vision.camera as cam

DEFAULT_COUNTS = {
    "Person": 0,
    "Hardhat": 0,
    "Safety Vest": 0,
    "Mask": 0,
    "NO-Hardhat": 0,
    "NO-Safety Vest": 0,
    "NO-Mask": 0
}


def detect_ppe():


    if cam.latest_results is None:
        
        return DEFAULT_COUNTS.copy()


    


    results = cam.latest_results[0]


    persons = []

    # ----------------------------
    # Collect all persons first
    # ----------------------------
    for box in results.boxes:

        confidence = float(box.conf[0])

        if confidence < 0.70:
            continue

        cls = int(box.cls[0])
        name = results.names[cls]
    

        if name == "Person":

            x1, y1, x2, y2 = box.xyxy[0].tolist()

            persons.append({
                "box": (x1, y1, x2, y2),
                "hardhat": False,
                "vest": False,
                "mask": False,
            })

    # ----------------------------
    # Match PPE to nearest person
    # ----------------------------
    for box in results.boxes:

        confidence = float(box.conf[0])

        if confidence < 0.70:
            continue

        cls = int(box.cls[0])
        name = results.names[cls]
    

        if name == "Person":
            continue

        x1, y1, x2, y2 = box.xyxy[0].tolist()

        cx = (x1 + x2) / 2
        cy = (y1 + y2) / 2

        best_person = None
        best_distance = float("inf")

        for person in persons:

            px1, py1, px2, py2 = person["box"]

            margin = 60

            if (
                px1 - margin <= cx <= px2 + margin and
                py1 - margin <= cy <= py2 + margin
            ):

                pcx = (px1 + px2) / 2
                pcy = (py1 + py2) / 2

                distance = (pcx - cx) ** 2 + (pcy - cy) ** 2

                if distance < best_distance:
                    best_distance = distance
                    best_person = person

        if best_person:

            if name == "Hardhat":
                best_person["hardhat"] = True

            elif name == "Safety Vest":
                best_person["vest"] = True

            elif name == "Mask":
                best_person["mask"] = True


        
            

    # ----------------------------
    # Calculate final counts
    # ----------------------------
    counts = DEFAULT_COUNTS.copy()
    counts["Person"] = len(persons)
    

    for person in persons:

        if person["hardhat"]:
            counts["Hardhat"] += 1
        else:
            counts["NO-Hardhat"] += 1

        if person["vest"]:
            counts["Safety Vest"] += 1
        else:
            counts["NO-Safety Vest"] += 1

        if person["mask"]:
            counts["Mask"] += 1
        else:
            counts["NO-Mask"] += 1


    return counts