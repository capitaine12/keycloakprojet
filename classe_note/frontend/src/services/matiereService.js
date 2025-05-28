import api from './api'

export default {
  async getAll() {
    const res = await api.get('/matieres')
    return res.data
  },
  async create(data) {
    const res = await api.post('/matieres', data)
    return res.data
  },
  async update(id, data) {
    const res = await api.put(`/matieres/${id}`, data)
    return res.data
  },
  async remove(id) {
    await api.delete(`/matieres/${id}`)
  },
}