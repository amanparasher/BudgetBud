from flask import Flask, jsonify, request ,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/api/advice', methods=['POST'])
def get_advice():
    data = request.json
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
