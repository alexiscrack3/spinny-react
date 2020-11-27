FROM node:12 as build

# RUN apt update && apt install -y vim

WORKDIR /app

COPY ["package.json", "package-lock.json", "/app/"]

RUN npm install --only=prod

COPY [".", "/app/"]

# EXPOSE 8080

RUN ["npm", "run", "build"]

FROM nginx:stable-alpine

COPY --from=build /app/build/ /bin/www

COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]