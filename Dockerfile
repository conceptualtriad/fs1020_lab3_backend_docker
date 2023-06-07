# FROM node:12.16.3-slim
FROM node:16-slim

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

CMD npm start