FROM --platform=amd64 node:23.1.0 as base

RUN npm install -g pnpm

WORKDIR /app

COPY . . 

COPY pnpm-lock.yaml .

RUN pnpm i


ENTRYPOINT [ "pnpm","next","dev" ]