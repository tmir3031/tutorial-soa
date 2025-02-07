FROM node:lts-alpine

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY resource-service ./

ENTRYPOINT node server.js