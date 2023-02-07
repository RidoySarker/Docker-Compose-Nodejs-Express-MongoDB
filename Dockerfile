FROM node:latest
MAINTAINER Ridoy
ARG user
ARG uid
RUN mkdir -p /var/www


COPY package.json /var/www/package.json

WORKDIR /var/www

RUN npm install

EXPOSE 3000

CMD ["npm", "run","serve"]
