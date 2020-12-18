FROM node:12 as build

WORKDIR /usr/src

COPY ["package.json", "package-lock.json", "/usr/src/"]

RUN npm install --only=prod

COPY [".", "/usr/src/"]

EXPOSE 8080

CMD ["npm", "start"]
