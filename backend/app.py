from flask import Flask, request
from datetime import datetime
import pandas as pd

import redis
r = redis.Redis(host='localhost', port=6379, db=0)

app = Flask(__name__)

id_operation = 0
listOperation = []

#  create a twitter like !
@app.route('/tweet', methods=['POST'])
def tweet():
    global id_operation
    global listOperation

    #  get the data from the request
    data = request.get_json()
    #  create a new operation
    id_operation += 1
    operation = {
        "id": id_operation,
        "user": data["user"],
        "message": data["message"],
        "date": datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    }
    #  add the operation to the list
    listOperation.append(operation)
    #  return the operation
    return operation

# tweetTest
@app.route('/tweetTest', methods=['POST'])
def tweetTest():
    global id_operation
    global listOperation

        
    user = str(request.form.get("user"))
    message=str(request.form.get("message"))

    #  create a new operation
    id_operation += 1
    operation = {
        "id": id_operation,
        "user": user,
        "message": message,
        "date": datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    }
    #  add the operation to the list
    listOperation.append(operation)
    r.add(user, message)
    #  return the operation
    return operation

# get all the tweets
@app.route('/tweets', methods=['GET'])
def tweets():
    return {"tweets": listOperation}

# get the tweets of a user
@app.route('/tweets/<user>', methods=['GET'])
def tweetsUser(user):
    #  filter the tweets of the user
    tweets = list(filter(lambda tweet: tweet["user"] == user, listOperation))
    return {"tweets": tweets}

# save a tweet in redis
@app.route('/saveTweet', methods=['POST'])
def saveTweet():
    #  get the data from the request
    data = request.get_json()
    #  save the tweet in redis
    r.set(data["user"], data["message"])
    return {"message": "tweet saved"}

# attribute a tweet to a user
@app.route('/attributeTweet', methods=['POST'])
def attributeTweet():
    #  get the data from the request
    data = request.get_json()
    #  get the tweet from redis
    tweet = r.get(data["user"])
    #  create a new operation
    id_operation += 1
    operation = {
        "id": id_operation,
        "user": data["user"],
        "message": tweet.decode("utf-8"),
        "date": datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    }
    #  add the operation to the list
    listOperation.append(operation)
    #  return the operation
    return operation

# retweet a tweet
@app.route('/retweet', methods=['POST'])
def retweet():
    #  get the data from the request
    data = request.get_json()
    #  get the tweet from redis
    tweet = r.get(data["user"])
    #  create a new operation
    id_operation += 1
    operation = {
        "id": id_operation,
        "user": data["user"],
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
    #  filter the tweets of the user
    tweets = list(filter(lambda tweet: hashtag in tweet["message"], listOperation))
    return {"tweets": tweets}

# get the hastag 