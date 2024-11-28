from utilities import autism_screeningModel
from sklearn.preprocessing import StandardScaler, MinMaxScaler
import pandas as pd
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
from tensorflow.keras.models import load_model
import numpy as np
import joblib

model_path = os.path.join(os.path.dirname(__file__), 'Models', 'screenmodel.h5')
screenModel = load_model(model_path)

def  screeningModel(A, Age_Mons, Sex, Jaundice, Family_mem_with_ASD):
    data = pd.DataFrame([{
        **{f'A{i+1}': val for i, val in enumerate(A)},
        'Age_Mons': Age_Mons,
        'Qchat-10-Score': sum(A),
        'Sex': Sex,
        'Jaundice': Jaundice,
        'Family_mem_with_ASD': Family_mem_with_ASD
    }])
    print(data)
    scaler_path = os.path.join(os.path.dirname(__file__), 'Models', 'scaler.pkl')
    scaler = joblib.load(scaler_path)
    scaled_data = scaler.transform(data)
    scaled_data = np.array(scaled_data)
    pred_val = screenModel.predict(scaled_data)
    print(pred_val)
    if pred_val[0][0] > 0.7:
        return 'Yes' ,pred_val
    else:
        return 'No', pred_val
