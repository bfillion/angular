#Étape base
FROM node:8-stretch AS base

#Étape développement
FROM base AS developpement

RUN apt-get update && \
    DEBIAN_FRONTEND="noninteractive" \
    apt-get install -y --no-install-recommends \
    chromium \
    libgconf-2-4 \
    openjdk-8-jre-headless \
    && rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN /usr/bin/chromium

RUN npm install -g @angular/cli

EXPOSE 4200

USER node
WORKDIR /app
CMD ng serve --host 0.0.0.0 --proxy-config proxy.conf.json

#Étape construction
FROM base AS construction
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

#Étape prod
FROM nginx:1.13.7-alpine AS prod
COPY --from=construction /app/dist/Exti-SPA /usr/share/nginx/html

COPY ./nginx-exti-spa.conf /etc/nginx/conf.d/default.conf