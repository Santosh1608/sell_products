FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install --only=prod

ENV NODE_ENV=test

COPY . .

CMD ["npm","start"]