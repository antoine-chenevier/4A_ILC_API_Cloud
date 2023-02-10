# how to create a calculator with post and get methods
# using flask

from flask import Flask, request
from datetime import datetime
import pandas as pd

app = Flask(__name__)

id_operation = 0
listOperation = []
#operation = ("typeOperation", "a", "b")

@app.route('/operation', methods=['POST'])
def operation():
    if request.method == 'POST':

        global id_operation

        operation=str(request.form.get("operation"))    
        a=int(request.form.get("a"))
        b=int(request.form.get("b"))

        if operation == 'add':
            result = a + b
           
            id_operation+=1

            value = (id_operation,result)
            listOperation.append(value)

            return str(result) + " " + str(id_operation)
        elif operation == 'sub':
            result = a - b
            id_operation = id_operation + 1

            value = (id_operation,result)
            listOperation.append(value)

            return str(result) + " " + str(id_operation)

        elif operation == 'mul':
            result = a * b
            id_operation = id_operation + 1

            value = (id_operation,result)
            listOperation.append(value)

            return str(result) + " " + str(id_operation)

        elif operation == 'div':
            result = a / b
            id_operation = id_operation + 1

            value = (id_operation,result)
            listOperation.append(value)

            return str(result) + " " + str(id_operation)

@app.route('/operation/<id>', methods=['GET'])
def operationId(id):
    if request.method == 'GET':
        for i in listOperation:
            if i[0] == int(id):
                return str(i[1])
    return "error"

if __name__ =='__main__':
    app.run()