// src/components/forms/ClasseService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/classes';

export default {
  getAllClasses() {
    return axios.get(API_URL);
  },

  getClasseById(id) {
    return axios.get(`${API_URL}/${id}`);
  },

  createClasse(classe) {
    return axios.post(API_URL, classe);
  },

  updateClasse(id, classe) {
    return axios.put(`${API_URL}/${id}`, classe);
  },

  deleteClasse(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
