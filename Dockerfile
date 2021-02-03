FROM node

WORKDIR /front

ADD . /front

RUN npm install -g @angular/cli 

COPY . /front