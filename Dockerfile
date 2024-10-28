FROM --platform=amd64 node:23-alpine as base

RUN apk update && apk upgrade

RUN npm install -g pnpm

WORKDIR /app

COPY . . 

COPY pnpm-lock.yaml .

ENTRYPOINT [ "pnpm" ]

CMD [ "run","dev" ]