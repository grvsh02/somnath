# Dockerfile

ARG NODE=node:18

# Stage 1: Install dependencies
FROM ${NODE} AS dependencies
# RUN apk add --no-cache libc6-compat
RUN mkdir -p /usr/app 
WORKDIR /usr/app

COPY package.json package-lock.json ./

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

EXPOSE 3000

ENV PORT 3000

# Serve the app
CMD ["node", "server.js"]

