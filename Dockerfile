FROM node:16.13.0-buster

WORKDIR /app

COPY . /app/

RUN npm install
RUN node ./setup/setup.js

CMD [ "npm", "start" ]