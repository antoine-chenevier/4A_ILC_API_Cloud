# Frontend

This is the frontend for the project.

## ReactJS

## Creating the application
We use this create-react-app to create a react application
```bash
sudo create-react-app twitter-react-app
```

## Starting the react application
We'll start our react application using npm start command
```bash
sudo npm start 
```
## Available pages on the react Application
This application consists mainly of 2 main pages the home page and the Explore page
Both pages have left panel for navigation and the right panel for showing most trending tweets

### Home page
The home page consists of 2 main parts the first box is to post tweets and the second is to displayed tweets from our redis DB

#### Post a Tweet
Here the area to post a tweet uses a component called "Create_Tweet_Box" in the components folder.
The user is prompted with 2 fields the first is to enter the name of the author of the tweet to be posted, and the second is the message the users wants to post and finally he can post it using the "Tweet" blue button.

This will send an HTTP POST request to the "localhost:5000/tweet" end point and save this tweet in the redis DB.

#### List of tweets
Here in this area is creating by displaying a list of tweets each tweet uses the "Tweet_Box" component from the components folder which is filled dynamically for each tweet.

This is done by following the following steps:
 - Send an HTTP GET request to the endpoint "localhost:5000/tweets" which returns a list of tweets from the redis DB
 - Get this data and fill it each component dynamically 
 - Get the list of tweets and display it dynamically on the HOME page


## Docker

### `Build docker file`

Building and compiling the docker file

```bash
docker build -t frontend-react-app . 
```

### `Run the docker image`
Here we want to run our docker container to start the flask app

```bash
sudo docker run -it -p 3000:3000 -d frontend-react-app
```

### `Checking if the docker file is running`
To verify the docker container is running properly we use the command
```bash
docker ps
```
Which will show the following result
```bash
CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS          PORTS                                       NAMES
2fcda5b4081a   frontend-react-app   "docker-entrypoint.s…"   11 seconds ago   Up 10 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   brave_shannon
```
