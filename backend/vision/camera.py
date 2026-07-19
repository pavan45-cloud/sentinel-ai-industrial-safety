
import cv2
import threading
from ultralytics import YOLO

camera = None

latest_frame = None
latest_results = None
latest_annotated_frame = None

camera_started = False

# Load YOLO only once
model = None


def update_camera():
    global latest_frame
    global latest_results
    global latest_annotated_frame

    while True:

        ret, frame = camera.read()

        if not ret:
            continue

        # Save original frame
        latest_frame = frame.copy()

        # Run YOLO continuously
        results = model(
            frame,
            verbose=False,
            conf=0.30,
            iou=0.45
        )

        latest_results = results
        latest_annotated_frame = results[0].plot()


def start_camera():
    global camera
    global camera_started
    global model

    if camera_started:
        return

    camera_started = True

    # Load YOLO only when the camera is actually started
    if model is None:
        model = YOLO("models/best.pt")

    camera = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    if not camera.isOpened():
        raise RuntimeError("Camera could not be opened")

    threading.Thread(
        target=update_camera,
        daemon=True
    ).start()

    print("✅ Camera thread started")