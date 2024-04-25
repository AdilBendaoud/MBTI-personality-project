FROM node:16.13.0-buster

WORKDIR /app

COPY . /app/

RUN npm install
RUN node ./setup/setup.js

EXPOSE 8888

CMD [ "npm", "start" ]