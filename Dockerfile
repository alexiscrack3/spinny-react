FROM node:10

RUN apt update && apt install -y vim

WORKDIR /usr/src

COPY ["package.json", "package-lock.json", "/usr/src/"]
RUN npm install --only=prod

COPY [".", "/usr/src/"]

EXPOSE 8080

CMD ["npm", "start"]
