// src/axios.js
import axios from 'axios'


// Création de l'instance Axios
const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // adapte l'URL à ton backend
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

// Intercepteur pour ajouter automatiquement le token d'authentification
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // récupère le token stocké
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
