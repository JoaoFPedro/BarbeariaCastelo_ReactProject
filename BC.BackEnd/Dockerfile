FROM node:20-alpine3.16

ENV APP_DIR=/usr/src/app 

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
COPY . .

RUN npm install

EXPOSE 8055
ENTRYPOINT ["npx", "directus", "start"]