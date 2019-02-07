FROM node:alpine as builder
LABEL authors="Ally Maumba"
WORKDIR '/landing'
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /landing/build /usr/share/nginx/html




