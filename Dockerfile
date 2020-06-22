##################################################
# Cloner
##################################################
# this is our first build stage, it will not persist in the final image
FROM alpine:latest as cloner

# install git
RUN apk update && apk add --no-cache git openssh

# add credentials on build
ARG SSH_PRIVATE_KEY

RUN mkdir /root/.ssh/ \
    && chmod 0700 /root/.ssh \
    && touch /root/.ssh/known_hosts

RUN ssh-keyscan github.com >> /root/.ssh/known_hosts \
    && echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa \
    && chmod 600 /root/.ssh/id_rsa 

ARG GIT_URL
RUN git clone ${GIT_URL} gitrepo

##################################################
# Main
##################################################
FROM node:14

RUN apt update && apt install -y netcat

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --from=cloner /gitrepo/package*.json /tmp/stage/

RUN cd /tmp/stage/ && npm install

COPY . /tmp/stage/
COPY --from=cloner /gitrepo /tmp/stage/

RUN cd /tmp/stage/ && npm run build \
    && mv build /tmp/build \
    #&& mv .env /tmp/.env \
    && rm -rf /tmp/stage

RUN git init \
    && git remote add origin https://github.com/odjhey/node-serve-build \
    && git pull origin master \
    && npm install \
    && mv /tmp/build . 
    #&& mv /tmp/.env . 

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080

CMD node server.js