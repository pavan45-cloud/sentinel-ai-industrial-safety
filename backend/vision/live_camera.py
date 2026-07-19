# from ultralytics import YOLO
# model = YOLO("models/best.pt")
# import cv2
# import time
# import vision.camera as cam

# print("✅ Live camera module loaded")


# def generate_frames():

#     while True:
#         while cam.latest_frame is None:
#              print("Waiting for first camera frame...")
#              time.sleep(0.1)

#         try:
#             frame = cam.latest_frame.copy()
#         except Exception:
#             time.sleep(0.03)
#             continue
#         results = model(
#         frame,
#         verbose=False,
#         conf=0.30,
#         iou=0.45
#     )
#         cam.latest_results = results
#         cam.latest_annotated_frame = results[0].plot()
#         frame = cam.latest_annotated_frame

# #it shows text:live camera in live camera
#         # cv2.putText(
#         #     frame,
#         #     "LIVE CAMERA",
#         #     (20, 40),
#         #     cv2.FONT_HERSHEY_SIMPLEX,
#         #     1,
#         #     (0, 255, 0),
#         #     2,
#         # )

#         ret, buffer = cv2.imencode(".jpg", frame)

#         if not ret:
#             continue

#         yield (
#             b'--frame\r\n'
#             b'Content-Type: image/jpeg\r\n\r\n'
#             + buffer.tobytes()
#             + b'\r\n'
#         )






import time
import cv2
import vision.camera as cam

print("✅ Live camera module loaded")


def generate_frames():

    while True:

        while cam.latest_annotated_frame is None:
            time.sleep(0.05)

        frame = cam.latest_annotated_frame.copy()

        ret, buffer = cv2.imencode(".jpg", frame)

        if not ret:
            continue

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n'
            + buffer.tobytes()
            + b'\r\n'
        )
