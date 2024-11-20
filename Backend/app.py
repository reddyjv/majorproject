from flask import Flask, render_template, request
from flask_cors import CORS
import utilities


screeningModel = utilities.autism_screeningModel
imageModel = utilities.autism_imageModel

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html', message = None)


@app.route('/compute', methods=['GET', 'POST'])
def autismChecker():
    if request.method == 'POST':
        A1 = request.form.get('A1', type=int)
        A2 = request.form.get('A2', type=int)
        A3 = request.form.get('A3', type=int)
        A4 = request.form.get('A4', type=int)
        A5 = request.form.get('A5', type=int)
        A6 = request.form.get('A6', type=int)
        A7 = request.form.get('A7', type=int)
        A8 = request.form.get('A8', type=int)
        A9 = request.form.get('A9', type=int)
        A10 = request.form.get('A10', type=int)
        Age_Mons = request.form.get('Age_Mons', type=int)
        Qchat_10_Score = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8 + A9 + A10
        Sex = request.form.get('Sex')
        Jaundice = request.form.get('Jaundice')
        Family_mem_with_ASD = request.form.get('Family_mem_with_ASD')
        image_file = request.files.get('image')

        print(f"Qchat_10_Score: {Qchat_10_Score}, Age_Mons: {Age_Mons}, Sex: {Sex}, Jaundice: {Jaundice}, Family_mem_with_ASD: {Family_mem_with_ASD}")
        
        if image_file:
            print("Image received:", image_file.filename)
        message = 'Form submitted successfully!'
        return render_template('autismChecker.html', message=message)
    return render_template('autismChecker.html', message=None)


if __name__ == '__main__':
    app.run(debug=True)