FROM node:22.20.0-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine

LABEL maintainer="lanpn"
RUN mkdir -p /app
WORKDIR /app
COPY --from=build /app/.vitepress/dist /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
