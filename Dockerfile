FROM node:12 as build

WORKDIR /usr/src

COPY ["package.json", "package-lock.json", "/usr/src/"]

RUN npm install --only=prod

COPY [".", "/usr/src/"]

RUN npm run build

FROM nginx:stable-alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /usr/src/build /usr/share/nginx/html

COPY --from=build /usr/src/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
