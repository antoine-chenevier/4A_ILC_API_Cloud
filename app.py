# how to create a calculator with post and get methods
# using flask

from flask import Flask, request
from datetime import datetime
import pandas as pd
app = Flask(__name__)
id = 0
operation = ('typeOperation', 'a', 'b')
@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    a = data['a']
    b = data['b']
    result = a + b
    return str(result)

@app.route('/sub', methods=['POST'])
def sub():
    data = request.get_json()
    a = data['a']
    b = data['b']
    result = a - b
    return str(result)

@app.route('/mul', methods=['POST'])
def mul():
    data = request.get_json()
    a = data['a']
    b = data['b']
    result = a * b
    return str(result)

@app.route('/div', methods=['POST'])
def div():
    data = request.get_json()
    a = data['a']
    b = data['b']
    result = a / b
    return str(result)

@app.route('/operation', methods=['GET'])
def operation():
    if operation[0] == 'add':
        result = operation[1] + operation[2]
        id = id + 1
        return str(result + id)
    elif operation[0] == 'sub':
        result = operation[1] - operation[2]
        id = id + 1
        return str(result + id)
    elif operation[0] == 'mul':
        result = operation[1] * operation[2]
        id = id + 1
        return str(result + id)
    elif operation[0] == 'div':
        result = operation[1] / operation[2]
        id = id + 1
        return str(result + id)
