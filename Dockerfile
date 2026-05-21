# Use pre-built artifacts for production ForestBrawl game server
FROM node:20-alpine
WORKDIR /app

# Copy pre-built backend and frontend static assets
COPY artifacts/api-server/dist ./artifacts/api-server/dist
COPY artifacts/api-server/data ./artifacts/api-server/data
COPY artifacts/api-server/package.json ./artifacts/api-server/package.json
COPY artifacts/forestbrawl ./artifacts/forestbrawl

# Install runtime dependencies only (using npm since we don't need pnpm for pre-built code)
WORKDIR /app/artifacts/api-server
RUN npm install --production --legacy-peer-deps || true

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
