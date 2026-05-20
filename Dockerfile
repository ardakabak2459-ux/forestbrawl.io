# Build a production-ready Node backend for the ForestBrawl game server
FROM node:20-alpine AS build
WORKDIR /app

# Copy server sources and frontend static assets used by the server
COPY artifacts/api-server/package.json artifacts/api-server/package-lock.json* ./artifacts/api-server/
COPY artifacts/api-server/tsconfig.json ./artifacts/api-server/
COPY artifacts/api-server/build.mjs ./artifacts/api-server/
COPY artifacts/api-server/src ./artifacts/api-server/src
COPY artifacts/api-server/.replit-artifact ./artifacts/api-server/.replit-artifact
COPY artifacts/forestbrawl ./artifacts/forestbrawl

WORKDIR /app/artifacts/api-server
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=build /app/artifacts/api-server/dist ./artifacts/api-server/dist
COPY --from=build /app/artifacts/api-server/package.json ./artifacts/api-server/package.json
COPY --from=build /app/artifacts/api-server/data ./artifacts/api-server/data
COPY --from=build /app/artifacts/forestbrawl ./artifacts/forestbrawl

WORKDIR /app/artifacts/api-server
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
