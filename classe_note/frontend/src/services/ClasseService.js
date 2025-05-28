// src/services/classeService.js
import axios from '/axios'


export default {
  getAll() {
    return axios.get('/classes').then(res => res.data)
  },
  getById(id) {
    return axios.get(`/classes/${id}`).then(res => res.data)
  },
  create(classe) {
    return axios.post('/classes', classe).then(res => res.data)
  },
  update(id, classe) {
    return axios.put(`/classes/${id}`, classe).then(res => res.data)
  },
  remove(id) {
    return axios.delete(`/classes/${id}`).then(res => res.data)
  }
}