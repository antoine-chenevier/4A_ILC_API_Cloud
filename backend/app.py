from flask import Flask, request
from datetime import datetime
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0)
r1 = redis.Redis(host='localhost', port=6379, db=1)

app = Flask(__name__)

id_operation = 0
listOperation = []

#  create a twitter like !

# tweet
@app.route('/tweet', methods=['POST'])
def tweet():
    global id_operation
    global listOperation

    #  get the data from the request
    user = str(request.form.get("user"))
    message=str(request.form.get("message"))

    #  save the tweet in list
    id_operation += 1
    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    
    #Create a json object
    data = {
        "id": id_operation,
        "user": user,
        "message": message,
        "date": date
    }
    
    #Json to string
    data = json.dumps(data)
    
    #Save in redis
    r.set(user,data)
    r1.set(date,data)

    return data


# get all the tweets
@app.route('/tweets', methods=['GET'])
def tweets():
    list = []

    for i in r.scan_iter():
        message = r.get(i)
        message= str(message)
        list.append(message)
    return str(list)

# get the tweets of a user
@app.route('/tweets/<user>', methods=['GET'])
def tweetsUser(user):
    list = []
    # Get the data from a user
    for i in r.scan_iter():
       
        message = r.get(i)
        message = str(message)
        #  filter the tweets of the user
        value = "user:" + user
        if(value in message):
            list.append(message)
    #  filter the tweets of the user
    return str(list)

# retweet a tweet
@app.route('/retweet', methods=['POST'])
def retweet():
    #  get the data from the request
    user = str(request.form.get("user"))
    #  get the tweet from redis
    tweet = r.get(user)
    #  create a new operation
    id_operation += 1
    operation = {
        "id": id_operation,
        "user": user,
        "message": tweet.decode("utf-8"),
        "date": datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    }
    #  add the operation to the list
    listOperation.append(operation)
    #  return the operation
    return operation

# get the tweets for a hashtag
@app.route('/tweetsHashtag/<hashtag>', methods=['GET'])
def tweetsHashtag(hashtag):
    list = []
    hashtag = "#" + hashtag

    # Get the data from a user
    for i in r.scan_iter():
       
        message = r.get(i)
        message = str(message)
        # get the hastag 
        if(hashtag in message):
            list.append(message)
    return str(list)
    

