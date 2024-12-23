FROM node:20-alpine

WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

EXPOSE 3000

# Use legacy watch mode for better performance in Docker
ENV CHOKIDAR_USEPOLLING=true

# Run nodemon with specific Docker settings
CMD ["nodemon", "--legacy-watch", "index.js"]