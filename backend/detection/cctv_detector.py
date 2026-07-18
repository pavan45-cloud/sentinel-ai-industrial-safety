from ultralytics import YOLO
import cv2

# Load YOLO model
model = YOLO("yolov8n.pt")

cap = cv2.VideoCapture(0)

while True:

    success, frame = cap.read()

    if not success:
        break

    results = model(frame)

    annotated = results[0].plot()

    cv2.imshow("SentinelAI CCTV", annotated)

    if cv2.waitKey(1) == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()