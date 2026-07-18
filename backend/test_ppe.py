import cv2
from vision.ppe_detector import detect_ppe

camera = cv2.VideoCapture(0)

while True:

    success, frame = camera.read()

    if not success:
        break

    result = detect_ppe(frame)

    print(result)

    cv2.imshow("PPE Test", frame)

    if cv2.waitKey(1) == ord("q"):
        break

camera.release()
cv2.destroyAllWindows()