# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Expose the port that Next.js uses
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]