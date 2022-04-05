FROM node:alpine
LABEL maintainer="evan@evantahler.com"

ENV PORT=8080

WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

CMD ["node", "./dist/index.js"]
EXPOSE $PORT
