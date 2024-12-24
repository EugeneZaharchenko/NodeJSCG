FROM node:20-alpine

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 9229

ENV CHOKIDAR_USEPOLLING=true

CMD ["nodemon", "--legacy-watch", "--inspect=0.0.0.0:9229", "index.js"]
# docker build -t my-node-app .
# docker run -p 3000:3000 -p 9229:9229 -v $(pwd):/app -v /app/node_modules my-node-app