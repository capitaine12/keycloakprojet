import api from './axios'

export default {
  getAll() {
    return api.get('/gestions').then(res => res.data)
  },
  getById(id) {
    return api.get(`/gestions/${id}`).then(res => res.data)
  },
  create(data) {
    return api.post('/gestions', data).then(res => res.data)
  },
  update(id, data) {
    return api.put(`/gestions/${id}`, data).then(res => res.data)
  },
  remove(id) {
    return api.delete(`/gestions/${id}`)
  }
}