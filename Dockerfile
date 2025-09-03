# Backend Dockerfile
FROM node:22.19.0-alpine
WORKDIR /app
COPY package-lock.json ./
RUN npm install
COPY . .
	# RUN npm run build && cp src/*.js dist/ || true # Commented for production
EXPOSE 3000
CMD ["node", "dist/server.js"]
