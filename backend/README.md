
# Flask Twitter Clone

This is a simple Flask app that implements a Twitter-like functionality. Users can create and view tweets, save and retweet existing tweets, and view tweets by hashtag.

Ce code est un exemple d'application web en utilisant Flask, une librairie Python pour créer des applications web.

L'application crée un système de "tweets" similaire à Twitter en utilisant Redis, une base de données NoSQL en mémoire.

## Dependencies

To use this app, you'll need the following dependencies:

- Flask
- Redis
- Pandas

To install them using pip, run:

## Usage

To start the app, run the following command in your terminal:

The app will be running at `http://localhost:5000/`.

### Endpoints

The following endpoints are available:

#### `POST /tweet`

Creates a new tweet. The request should contain JSON data with the following fields:

- `user`: The username of the user creating the tweet.
- `message`: The content of the tweet.

Returns a JSON object with the details of the new tweet.

```bash
curl -X POST http://localhost:5000/tweet
```

#### `GET /tweets`

Returns a JSON object with all of the tweets that have been created.

```bash
curl -X GET http://localhost:5000/tweets
```

#### `GET /tweets/<user>`

Returns a JSON object with all of the tweets created by a specific user.

```bash
curl -X GET http://localhost:5000/tweets/<user>
```

#### `POST /retweet`

Retweets a tweet. The request should contain JSON data with the following field:

- `user`: The username of the user retweeting the tweet.

Retrieves the tweet from Redis and creates a new tweet with the same content, attributing it to the specified user.

Returns a JSON object with the details of the new tweet.

```bash
curl -X POST http://localhost:5000/retweet
```

#### `GET /tweetsHashtag/<hashtag>`

Returns a JSON object with all of the tweets that contain the specified hashtag.

```bash
curl -X GET http://localhost:5000/tweetsHashtag/<hashtag>
```

## Docker

### `Build docker file`

Building and compiling the docker file

```bash
docker build -t backend-flask-app . 
```

### `Run the docker image`
Here we want to run our docker container to start the flask app

```bash
sudo docker run -it -p 5000:5000 -d backend-flask-app
```

### `Checking if the docker file is running`
To verify the docker container is running properly we use the command
```bash
docker ps
```
Which will show the following result
```bash
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS         PORTS                                       NAMES
c3fa20e70792   backend-flask-app   "flask run --host 0.…"   9 minutes ago   Up 9 minutes   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   stoic_sanderson
```

## Configuration de Redis

Le code utilise Redis comme base de données. Il faut installer Redis pour pouvoir exécuter l'application.

Par défaut, l'application utilise une base de données Redis locale avec le port 6379. Si vous avez une configuration différente, vous pouvez la changer dans le code en modifiant les valeurs des variables d'environnement.

## Auteur

Ce code a été développé par antoine pour le cours de Cloud Computing de l'ESIREM.
