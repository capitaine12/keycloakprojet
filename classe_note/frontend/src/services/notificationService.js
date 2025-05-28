import api from './api'

export default {
  async getAll() {
    const res = await api.get('/notifications')
    return res.data
  },
  async create(data) {
    const res = await api.post('/notifications', data)
    return res.data
  },
  async update(id, data) {
    const res = await api.put(`/notifications/${id}`, data)
    return res.data
  },
  async remove(id) {
    await api.delete(`/notifications/${id}`)
  },
}