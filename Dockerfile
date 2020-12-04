FROM node:12

WORKDIR /app

ADD package.json /app/package.json

RUN npm install

ADD . /app

EXPOSE 9000

CMD ["npm", "run", "start"]