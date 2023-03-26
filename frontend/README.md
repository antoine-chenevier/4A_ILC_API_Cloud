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
