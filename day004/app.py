from flask import Flask, request, jsonify
from random import randint

app = Flask(__name__)


@app.route('/')
def hello_world():
    num = randint(0, 3)
    if num == 1:
        jsonify({'err': 500}), 500
    elif num == 2:
        return jsonify({'err': 401}), 401
    return jsonify(request.args or {})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)