FROM node:16

WORKDIR /usr/src/app

ENV  COINBASE_CURRENCY=https://api.coindesk.com/v1/bpi/supported-currencies.json
ENV  COINBASE_BTC=https://api.coindesk.com/v1/bpi/historical/close.json

COPY package.json .

#RUN npm install -g yarn
RUN yarn install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]