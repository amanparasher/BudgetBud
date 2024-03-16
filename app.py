from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World!"

@app.route('/api/advice', methods=['POST'])
def get_advice():
    data = request.json
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
