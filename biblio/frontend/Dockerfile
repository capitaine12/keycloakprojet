FROM node:20

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers
COPY . .

# Installer les dépendances Angular
RUN npm install

# Exposer le port Angular
EXPOSE 4200

# Lancer le serveur Angular
CMD ["npm", "run", "start"]
