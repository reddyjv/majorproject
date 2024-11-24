from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from imageModel import imageValidator
from screenModel import screeningModel
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html', message = None)


@app.route('/compute', methods=['GET', 'POST'])
def autismChecker():
    if request.method == 'POST':
        A = []
        for i in range(1, 11):
            score = request.form.get(f'A{i}', type=int)
            A.append(score)

        Age_Mons = request.form.get('Age_Mons', type=int)
        Sex = request.form.get('Sex')
        Jaundice = request.form.get('Jaundice')
        Family_mem_with_ASD = request.form.get('Family_mem_with_ASD')   
        image_file = request.files.get('image')

        print(A, Age_Mons, Sex, Jaundice, Family_mem_with_ASD)

        Sex_encoded = 1 if Sex.lower() == 'male' else 0
        Jaundice_encoded = 1 if Jaundice.lower() == 'yes' else 0
        Family_mem_with_ASD_encoded = 1 if Family_mem_with_ASD.lower() == 'yes' else 0

        print("This is after Encoding", A, Age_Mons, Sex_encoded, Jaundice_encoded, Family_mem_with_ASD_encoded)

        screenValue, screenScore = screeningModel(A, Age_Mons, Sex_encoded, Jaundice_encoded, Family_mem_with_ASD_encoded)
        imageValue, imgScore = imageValidator(image_file)

        print(screenValue ,imageValue)
        finalResult = combine_scores(np.argmax(imgScore),np.argmax(screenScore), np.sum(A))
        return jsonify({"message": f"For the given report, the result is {finalResult}."})

    return render_template('autismChecker.html', message=None)

def combine_scores(Img_Score, Screen_Score, Qchat_Value):
    weight_Img = 0.4
    weight_Screen = 0.4
    weight_Qchat = 0.2

    combined_score = (weight_Img * Img_Score) + (weight_Screen * Screen_Score) + (weight_Qchat * Qchat_Value)

    threshold = 0.6  

    if combined_score >= threshold:
        return "Autistic"
    else:
        return "Non_Autistic"

if __name__ == '__main__':
    app.run(debug=True)