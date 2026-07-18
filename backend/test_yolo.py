import cv2
from ultralytics import YOLO

model = YOLO("models/best.pt")

cam = cv2.VideoCapture(0, cv2.CAP_DSHOW)

while True:

    ret, frame = cam.read()

    if not ret:
        break

    results = model(frame)

    frame = results[0].plot()

    cv2.imshow("YOLO", frame)

    if cv2.waitKey(1) == 27:
        break

cam.release()
cv2.destroyAllWindows()