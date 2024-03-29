# how to create a calculator with post and get methods
# using flask

from flask import Flask, request
from datetime import datetime
import pandas as pd

import redis
r = redis.Redis(host='localhost', port=6379, db=0)

app = Flask(__name__)

id_operation = 0
listOperation = []
#operation = ("typeOperation", "a", "b")

@app.route('/operation', methods=['POST'])
def operation():

    if request.method == 'POST':

        global id_operation
        global r

        operation=str(request.form.get("operation"))    
        a=int(request.form.get("a"))
        b=int(request.form.get("b"))

        if operation == 'add':
            result = a + b
           
            id_operation+=1

            value = (id_operation,result)
            listOperation.append(value)
            r.set(id_operation, result)

            return str(id_operation)+"\n"
        elif operation == 'sub':
            result = a - b
            id_operation = id_operation + 1

            value = (id_operation,result)
            listOperation.append(value)
            r.set(id_operation, result)

            return str(id_operation)+"\n"

        elif operation == 'mul':
            result = a * b
            id_operation = id_operation + 1

            value = (id_operation,result)
            listOperation.append(value)
            r.set(id_operation, result)

            return str(id_operation)+"\n"

        elif operation == 'div':
            result = a / b
            id_operation = id_operation + 1

            value = (id_operation,result)
            listOperation.append(value)
            r.set(id_operation, result)

            return str(id_operation)+"\n"

@app.route('/operation/<id>', methods=['GET'])
def operationId(id):

    if request.method == 'GET':

        for i in listOperation:

            if i[0] == int(id):
                
                return r.get(id)
    return "error \n"

if __name__ =='__main__':
    app.run()