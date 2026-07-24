FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application
COPY . .

# Build Next.js
RUN npm run build

# Expose custom port
EXPOSE 4200

# Start custom server
CMD ["npm", "start"]
