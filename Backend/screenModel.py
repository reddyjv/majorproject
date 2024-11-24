import utilities
from sklearn.preprocessing import StandardScaler
import pandas as pd
from tensorflow.keras.models import load_model

screeningModel = load_model(utilities.autism_screeningModel)

def screeningModel(A, Age_Mons, Sex, Jaundice, Family_mem_with_ASD):
    data = pd.DataFrame([{
        **{f'A{i+1}': val for i, val in enumerate(A)},
        'Age_Mons': Age_Mons,
        'Qchat_10_Score': sum(A),
        'Sex': Sex,
        'Jaundice': Jaundice,
        'Family_mem_with_ASD': Family_mem_with_ASD
    }])

    scaler = StandardScaler()
    scaled_data = scaler.fit_transform(data)
    pred = screeningModel.predict(scaled_data)
    return 'Yes' if pred is 1 else 'No'
    
