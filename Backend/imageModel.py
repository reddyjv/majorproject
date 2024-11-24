from utilities import autism_imageModel
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

imageModel = load_model(autism_imageModel)
class_names = ['Autistic', 'Non_Autistic']

def imageValidator(image_file):
    file_bytes = np.asarray(bytearray(image_file.read()), dtype=np.uint8)
    opencv_image = cv2.imdecode(file_bytes, 1)
    opencv_image = cv2.resize(opencv_image, (224, 224))
    opencv_image = preprocess_input(opencv_image)
    opencv_image = np.expand_dims(opencv_image, axis=0)

    y_pred = imageModel.predict(opencv_image)

    result = class_names[np.argmax(y_pred)]
    return result