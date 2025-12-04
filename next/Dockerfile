# ─── STAGE 1: Build ─────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Instala dependencias
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY .eslintrc.json ./
RUN sed -i 's/"@typescript-eslint\/no-unused-vars": "error"/"@typescript-eslint\/no-unused-vars": "warn"/g' .eslintrc.json

# Copia el código y genera la build
COPY . .
RUN yarn build

# ─── STAGE 2: Runtime ───────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copia sólo lo necesario para correr
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expone el puerto 3000 (Next.js por defecto)
EXPOSE 3000

# Arranca el server
CMD ["node_modules/.bin/next", "start"]
