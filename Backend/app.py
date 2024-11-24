from flask import Flask, render_template, request
from flask_cors import CORS
import screenModel
import Backend.imageModel as imageModel

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

        screenValue = screenModel.screeningModel(A, Age_Mons, Sex, Jaundice, Family_mem_with_ASD)
        imageValue = imageModel.imageValidator(image_file)

        print(screenValue, imageValue)
        message = 'Form submitted successfully!'
        return render_template('autismChecker.html', message=message)
    return render_template('autismChecker.html', message=None)


if __name__ == '__main__':
    app.run(debug=True)