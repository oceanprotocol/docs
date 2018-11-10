FROM node:alpine

RUN apk update && \
    apk add --update --no-cache --repository  http://dl-3.alpinelinux.org/alpine/edge/testing \
    g++ \
    git \
    make \
    bash \
    python \
    && rm -rf /var/cache/apk/*

RUN mkdir -p /docs
WORKDIR /docs

COPY package.json .

RUN npm install && npm cache clean --force
