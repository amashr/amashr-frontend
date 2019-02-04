FROM node:alpine as builder
LABEL authors="Ally Maumba"
WORKDIR '/app'
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html




