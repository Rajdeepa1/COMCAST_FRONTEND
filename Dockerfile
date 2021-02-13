FROM node

WORKDIR /front

ADD . /front

RUN npm install -g @angular/cli

RUN npm install

COPY . /front
