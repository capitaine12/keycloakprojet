import api from './api'

export default {
  async getAll() {
    const res = await api.get('/emplois')
    return res.data
  },
  async create(data) {
    const res = await api.post('/emplois', data)
    return res.data
  },
  async update(id, data) {
    const res = await api.put(`/emplois/${id}`, data)
    return res.data
  },
  async remove(id) {
    await api.delete(`/emplois/${id}`)
  },
}