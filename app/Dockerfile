FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install --save-dev typescript

COPY . .

CMD ["sh", "-c", "cd /app/src && npm run prod"]