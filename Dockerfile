FROM node:20-alpine

# Set working directory
WORKDIR /app

# Create a package.json with basic configuration
RUN echo '{"name":"docker-node-app","version":"1.0.0","main":"index.js","scripts":{"start":"node index.js"},"dependencies":{"express":"^4.18.2"}}' > package.json

# Install dependencies
RUN npm install

# Copy all local files to the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]