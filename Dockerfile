# Base image
FROM node:18

# Set the working directory
WORKDIR /home/app

# Copy all files to the working directory
COPY . .

# Install the dependencies
RUN npm install

# Expose the port 
EXPOSE 5000

# Command to run the project 
CMD [ "npm", "start" ]