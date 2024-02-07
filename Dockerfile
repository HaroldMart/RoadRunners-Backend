FROM node:20.11-alpine

WORKDIR /RoadRunners-API
COPY package*.json ./

WORKDIR /RoadRunners-API/src
COPY /src ./

RUN npm install
EXPOSE 3000
CMD ["npm", "start"]