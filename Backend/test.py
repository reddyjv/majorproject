import pandas as pd
from tensorflow.keras.models import load_model
import numpy as np
from sklearn.preprocessing import StandardScaler
from utilities import autism_screeningModel
screeningModel = load_model(autism_screeningModel)

A = [1, 0, 1, 0, 1, 1, 1, 1, 0, 1]
data = pd.DataFrame([{
        **{f'A{i+1}': val for i, val in enumerate(A)},
        'Age_Mons': 24,
        'Qchat_10_Score': sum(A),
        'Sex': 1,
        'Jaundice': 0,
        'Family_mem_with_ASD': 1
    }])

print(data)
scaler = StandardScaler()
scaled_data = scaler.fit_transform(data)
scaled_data = np.array(scaled_data)
pred = screeningModel.predict(scaled_data)
pred = np.argmax(pred, axis=1)
print(pred)

