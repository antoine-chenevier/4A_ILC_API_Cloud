
# Flask Twitter Clone

This is a simple Flask app that implements a Twitter-like functionality. Users can create and view tweets, save and retweet existing tweets, and view tweets by hashtag.

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

#### `POST /saveTweet`

Saves a tweet in Redis. The request should contain JSON data with the following fields:

- `user`: The username of the user creating the tweet.
- `message`: The content of the tweet.

Returns a JSON object with a success message.

```bash
curl -X POST http://localhost:5000/saveTweet
```

#### `POST /attributeTweet`

Attributes a tweet to a user. The request should contain JSON data with the following field:

- `user`: The username of the user attributing the tweet.

Retrieves the tweet from Redis and creates a new tweet with the same content, attributing it to the specified user.

Returns a JSON object with the details of the new tweet.

```bash
curl -X POST http://localhost:5000/attributeTweet
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
