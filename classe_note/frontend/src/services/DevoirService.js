import api from './api'

export default {
  async getAll() {
    const res = await api.get('/devoirs')
    return res.data
  },
  async create(data) {
    const res = await api.post('/devoirs', data)
    return res.data
  },
  async update(id, data) {
    const res = await api.put(`/devoirs/${id}`, data)
    return res.data
  },
  async remove(id) {
    await api.delete(`/devoirs/${id}`)
  },
}