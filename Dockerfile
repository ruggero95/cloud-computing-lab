FROM node:16.13.0-alpine3.13 AS building

WORKDIR /home/node/app

COPY package.json .

RUN npm install

COPY . .

#compilo typescript
RUN npm run build

FROM node:16.13.0-alpine3.13 AS app

WORKDIR /home/node/app

COPY --from=building /home/node/app/build build
COPY run_node_entrypoint.sh .
COPY package.json .

RUN npm install --no-dev && chmod +x ./run_node_entrypoint.sh

ENTRYPOINT ["./run_node_entrypoint.sh"]