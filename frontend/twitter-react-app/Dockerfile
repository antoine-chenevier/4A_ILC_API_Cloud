# Use an official Node.js runtime as a parent image
FROM node:14-alpine
# Set the working directory to /app
WORKDIR /app
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application to the container
COPY . .
# Set the working directory to the twitter-react-app folder
WORKDIR /app/twitter-react-app
# Build the application
RUN npm run build
# Expose port 3000 to the outside world
EXPOSE 3000
# Start the application
CMD ["npm", "run", "start"]
