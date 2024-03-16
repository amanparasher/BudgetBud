from flask import Flask, request, render_template
from dotenv import load_dotenv

import os
from supabase import create_client, Client

load_dotenv()
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

app = Flask(__name__)
UPLOAD_FOLDER = '/temp'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@app.route('/')
def index():
    return render_template('wow.html', word=["wow", "sample"])


@app.route('/getCsv')
def get_csv():
    res = supabase.storage.from_('csv-files').get_public_url('demo-data.csv')
    print(res)


@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'

    # Save the file temporarily
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)

    # Upload the file to storage system

    with open(filepath, 'rb') as f:
        supabase.storage.from_('csv-files').upload(file=f, path=file.filename, file_options={"content-type": "text/csv"})

    # Once the file is uploaded to the storage system, delete the temporary file
    os.remove(filepath)

    return 'File uploaded successfully'


if __name__ == '__main__':
    app.run(debug=True)
