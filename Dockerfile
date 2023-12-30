ARG NODE=node:18-alpine

# Stage 1: Install dependencies
FROM ${NODE} AS dependencies
RUN apk add --no-cache libc6-compat
RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

FROM ${NODE} AS builder
WORKDIR /usr/app
COPY --from=dependencies /usr/app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

ENV NODE_ENV=production


FROM ${NODE} AS runner
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/.next/standalone ./standalone
COPY --from=builder /usr/app/public /standalone/public
COPY --from=builder /usr/app/.next/static /standalone/.next/static

EXPOSE 3000

ENV PORT 3000

# Serve the app
CMD ["node", "standalone/server.js"]