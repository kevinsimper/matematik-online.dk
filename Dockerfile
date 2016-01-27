FROM node:latest

WORKDIR /app

EXPOSE 3000

ADD . /app

RUN npm install

CMD npm start
