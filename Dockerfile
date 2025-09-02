# Backend Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
	RUN npm run build && cp src/*.js dist/ || true
EXPOSE 3000
	CMD ["node", "dist/server.js"]
