from ultralytics import YOLO

# Load PPE model
model = YOLO("models/best.pt")


def detect_workers(image_path):

    results = model(image_path)

    # Save image with detection boxes
    results[0].save(filename="static/detection.jpg")

    workers = 0
    helmets = 0
    vests = 0
    no_helmet = 0
    no_vest = 0

    for result in results:

        names = result.names

        for box in result.boxes:

            class_id = int(box.cls[0])
            label = names[class_id].lower()

            print("Detected:", label)

            if label == "person":
                workers += 1

            elif label == "hardhat":
                helmets += 1

            elif label == "safety vest":
                vests += 1

            elif label == "no-hardhat":
                no_helmet += 1

            elif label == "no-safety vest":
                no_vest += 1

    return {
        "workers": workers,
        "helmets": helmets,
        "vests": vests,
        "without_helmet": no_helmet,
        "without_vest": no_vest,
        "image": "http://127.0.0.1:8000/static/detection.jpg"
    }