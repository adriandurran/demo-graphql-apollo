FROM node:latest
LABEL maintainer="adrian@clarkdesign.tech"
RUN npm install -g nodemon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]
