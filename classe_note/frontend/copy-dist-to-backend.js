// copy-dist-to-backend.js
const path = require('path');
const fse = require('fs-extra');

const FRONTEND_DIST = path.join(__dirname, 'dist');
const BACKEND_STATIC = path.join(__dirname, '..', 'cahierdetexte', 'src', 'main', 'resources', 'static');

async function copyDist() {
  try {
    // Supprimer l'ancien contenu du dossier static
    await fse.emptyDir(BACKEND_STATIC);
    // Copier le contenu de dist vers static
    await fse.copy(FRONTEND_DIST, BACKEND_STATIC);
    console.log('✅ Copie réussie vers le backend (static/) !');
  } catch (err) {
    console.error('❌ Erreur lors de la copie :', err);
  }
}

copyDist();