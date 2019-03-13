FROM node:8

ADD . /app
WORKDIR /app

RUN npm i

EXPOSE 8080
CMD npm start
