FROM node:14-alpine

WORKDIR /app

COPY ./server/package.json /app/server/package.json
RUN cd /app/server && npm i

COPY ./vue/package.json /app/vue/package.json
RUN cd /app/vue && npm i

COPY ./server/ /app/server/
COPY ./vue/ /app/vue/

RUN cd /app/vue && npm run build

CMD ["node", "server", "index.js"]
