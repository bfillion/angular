FROM node:8-stretch AS base

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

FROM base AS publication
WORKDIR /app
COPY . .

FROM base AS execution
# start app
CMD ng serve --host 0.0.0.0
