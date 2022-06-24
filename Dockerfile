FROM node:14.17-alpine as builder

WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .
RUN ["yarn", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html