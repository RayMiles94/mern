FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ..
EXPOSE 8080
CMD["node", "server.js"]
#  build docker with command : docker build -t <name of image>
#  to see if its work : docker images
