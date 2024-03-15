from flask import Flask, request ,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('hero.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    # You can now process the file here (save it, parse it, etc.)
    return 'File uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)
