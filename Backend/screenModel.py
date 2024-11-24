from utilities import autism_screeningModel
from sklearn.preprocessing import StandardScaler
import pandas as pd
from tensorflow.keras.models import load_model
import numpy as np

screenModel = load_model(autism_screeningModel)

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
    scaler = StandardScaler()
    scaled_data = scaler.fit_transform(data)
    scaled_data = np.array(scaled_data)
    pred = screenModel.predict(scaled_data)
    pred = np.argmax(pred, axis=1)
    return 'Yes' if pred == 1 else 'No'
