import cv2
import threading

camera = None
latest_frame = None
latest_results = None
latest_annotated_frame = None
camera_started = False


def update_camera():
    global latest_frame, camera

    while True:
        ret, frame = camera.read()

        if not ret:
            print("Camera read failed")
            continue

        latest_frame = frame.copy()

        #it opens camera test
        # cv2.imshow("Camera Test", frame)

        # if cv2.waitKey(1) == 27:
        #     break


def start_camera():
    global camera, camera_started

    if camera_started:
        return

    camera_started = True

    camera = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    if not camera.isOpened():
        raise RuntimeError("Camera could not be opened")

    threading.Thread(
        target=update_camera,
        daemon=True
    ).start()

    print("Camera thread started")