# Production Dockerfile for MIT ADT Event Management Portal
FROM node:20-slim

WORKDIR /app

# Install system dependencies needed by Prisma
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends openssl ca-certificates && \
    rm -rf /var/lib/apt/lists/*

ENV PORT=3000
ENV DATABASE_URL="file:./dev.db"
ENV JWT_SECRET="mit-adt-event-system-secure-jwt-secret-key-2026"
ENV NEXT_PUBLIC_APP_NAME="MIT ADT Event Management Portal"
ENV NEXT_PUBLIC_COLLEGE_NAME="MIT Art, Design and Technology University, Pune"

# Install all dependencies including devDependencies (TypeScript is required to parse tsconfig.json path aliases)
COPY package.json package-lock.json* ./
COPY prisma ./prisma/

RUN npm install --include=dev

# Copy application source code
COPY . .

# Generate Prisma Client for Debian Linux (OpenSSL 3.0)
RUN npx prisma generate

# Build Next.js application
RUN npm run build

# Set production environment for runtime
ENV NODE_ENV=production

# Expose internal application port
EXPOSE 3000

# Start command: sync SQLite schema and launch the production server
CMD ["sh", "-c", "npx prisma db push --skip-generate && npm start"]
