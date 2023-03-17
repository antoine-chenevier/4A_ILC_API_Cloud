from flask import Flask, request
from datetime import datetime
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)
r1 = redis.Redis(host='localhost', port=6379, db=1,decode_responses=True)

id_operation = 0

app = Flask(__name__)

#  Create a twitter like !

# Tweet
@app.route('/tweet', methods=['POST'])
def tweet():
    
    # Init variable
    global id_operation
    listMessage = []

    #  get the data from the request
    user = str(request.form.get("user"))
    message=str(request.form.get("message"))

    #  save the tweet in list
    id_operation += 1
    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    
    # Create a json object
    data = {
        "id": id_operation,
        "user": user,
        "message": message,
        "date": date
    }
    
    # Json to string
    data = json.dumps(data)
    
    # Get the data from a user
    for i in r.scan_iter(match=user):
        message = r.get(i)
        message = str(message)
        listMessage = message + data
  
    # Save in redis
    listMessage = str(listMessage)
    r.set(user,listMessage)
    r1.set(date,data)

    return data + "\n"


# get all the tweets
@app.route('/tweets', methods=['GET'])
def tweets():
   
   # Init variable
    list = []

    # Get the data
    for i in r1.scan_iter():
        message = r1.get(i)
        list.append(message)
    return str(list) + "\n"


# get the tweets of a user
@app.route('/tweets/<user>', methods=['GET'])
def tweetsUser(user):

    # Get the data from a user
    for i in r.scan_iter(match=user):
        message = r.get(i)
        
    #  filter the tweets of the user
    return message + "\n"


# retweet a tweet
@app.route('/retweet/', methods=['POST'])
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

    #  return the operation
    return operation + "\n"


# get the tweets for a hashtag
@app.route('/tweetsHashtag/<hashtag>', methods=['GET'])
def tweetsHashtag(hashtag):
    
    # Init variable
    list = []
    hashtag = "#" + hashtag

    # Get the data from a user
    for i in r.scan_iter():
       
        message = r.get(i)
        message = str(message)
       
        # get the hastag 
        if(hashtag in message):
            list.append(message)
    return str(list) + "\n"