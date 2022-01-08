FROM node:14.18.2-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src src
COPY test test
COPY .env ./
COPY nest-cli.json ./
COPY ts*.json ./

CMD ["npm", "run", "start:dev"]