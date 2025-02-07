FROM node:lts-alpine

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY auth-service ./

ENTRYPOINT node server.js