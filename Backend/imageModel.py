from utilities import autism_imageModel
import cv2
import numpy as np
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

model_path = os.path.join(os.path.dirname(__file__), 'Models', 'autismImages.h5')
imageModel = load_model(model_path)
class_names = ['Autistic', 'Non_Autistic']

def imageValidator(image_file):
    file_bytes = np.asarray(bytearray(image_file.read()), dtype=np.uint8)
    opencv_image = cv2.imdecode(file_bytes, 1)
    opencv_image = cv2.resize(opencv_image, (224, 224))
    opencv_image = preprocess_input(opencv_image)
    opencv_image = np.expand_dims(opencv_image, axis=0)

    y_pred = imageModel.predict(opencv_image)

    result = class_names[np.argmax(y_pred)]
    return result, y_pred