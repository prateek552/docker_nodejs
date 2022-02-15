FROM node:16

WORKDIR /home/jenkins/agent

ENV  COINBASE_CURRENCY=https://api.coindesk.com/v1/bpi/supported-currencies.json
ENV  COINBASE_BTC=https://api.coindesk.com/v1/bpi/historical/close.json

COPY package.json .

#RUN npm install -g yarn
RUN yarn install

RUN yarn global add jest

COPY . .

USER root

RUN echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

EXPOSE 8080

CMD ["node", "server.js"]