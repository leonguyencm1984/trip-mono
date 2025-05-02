FROM node:18-alpine

WORKDIR /app

# Copy root package files
COPY package.json ./
COPY package-lock.json ./

# Copy workspace package files
COPY packages/trip-shared/package.json ./packages/trip-shared/
COPY services/trip-auth-service/package.json ./services/trip-auth-service/

# Install dependencies
RUN npm install --legacy-peer-deps --no-man

# Copy source code
COPY packages/trip-shared ./packages/trip-shared
COPY services/trip-auth-service ./services/trip-auth-service

# Build shared packages
RUN npm run build --workspace=packages/trip-shared

# Build auth service
RUN npm run build --workspace=services/trip-auth-service

EXPOSE 3000

CMD ["npm", "run", "start", "--workspace=services/trip-auth-service"] 