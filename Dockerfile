FROM node:18-alpine AS build

WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]