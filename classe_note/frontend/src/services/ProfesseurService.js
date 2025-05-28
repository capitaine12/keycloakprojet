import axios from './axios.js'

const API_URL = '/professeurs'

export const ProfesseurService = {
  async getAll() {
    const response = await axios.get(API_URL)
    return response.data
  },

  async getById(id) {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  },

  async create(data) {
    const response = await axios.post(API_URL, data)
    return response.data
  },

  async update(id, data) {
    const response = await axios.put(`${API_URL}/${id}`, data)
    return response.data
  },

  async remove(id) {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
  }
}