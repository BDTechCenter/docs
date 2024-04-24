FROM node:lts-alpine3.18

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]