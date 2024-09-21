# Étape 1 : Construction
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./


# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Production
FROM node:20-alpine AS runner

# Définir le répertoire de travail
WORKDIR /app

# Copier les dépendances de production depuis le builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
RUN npm install --only=production

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Définir la variable d'environnement pour la production
ENV NODE_ENV=production

# Lancer l'application
CMD ["npm", "start"]


