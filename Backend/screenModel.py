from utilities import autism_screeningModel
from sklearn.preprocessing import StandardScaler, MinMaxScaler
import pandas as pd
from tensorflow.keras.models import load_model
import numpy as np

screenModel = load_model(autism_screeningModel)
# class_names = ['Yes', 'No']
def  screeningModel(A, Age_Mons, Sex, Jaundice, Family_mem_with_ASD):
    data = pd.DataFrame([{
        **{f'A{i+1}': val for i, val in enumerate(A)},
        'Age_Mons': Age_Mons,
        'Qchat_10_Score': sum(A),
        'Sex': Sex,
        'Jaundice': Jaundice,
        'Family_mem_with_ASD': Family_mem_with_ASD
    }])
    print(data)
    scaler = MinMaxScaler()
    scaled_data = scaler.fit_transform(data)
    scaled_data = np.array(scaled_data)
    pred_val = screenModel.predict(scaled_data)
    print(pred_val)
    if pred_val[0][0] > 0.7:
        return 'Yes' ,pred_val
    else:
        return 'No', pred_val
