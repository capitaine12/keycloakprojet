import axios from './axios' // Assure-toi que ce fichier existe et est bien configuré

const API_URL = '/evenements'

export const EvenementService = {
  async getAll() {
    try {
      const response = await axios.get(API_URL)
      return response.data
    } catch (error) {
      console.error('Erreur lors de la récupération des événements :', error)
      return []
    }
  },

  async getById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`)
      return response.data
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'événement avec id ${id} :`, error)
      return null
    }
  },

  async create(evenement) {
    try {
      const response = await axios.post(API_URL, evenement)
      return response.data
    } catch (error) {
      console.error('Erreur lors de la création de l\'événement :', error)
      throw error
    }
  },

  async update(id, evenement) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, evenement)
      return response.data
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'événement :', error)
      throw error
    }
  },

  async remove(id) {
    try {
      await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'événement avec id ${id} :`, error)
      throw error
    }
  }
}
