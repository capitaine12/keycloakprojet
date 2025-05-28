import { defineStore } from 'pinia'
import axios from '../services/api'
import router from '../router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    async login(credentials) {
      const res = await axios.post('/auth/login', credentials)
      this.token = res.data.token
      localStorage.setItem('token', this.token)
      this.fetchUser()
      router.push('/dashboard')
    },
    async register(userData) {
      await axios.post('/auth/register', userData)
      router.push('/login')
    },
    async fetchUser() {
      const res = await axios.get('/auth/me', {
        headers: { Authorization: `Bearer ${this.token}` }
      })
      this.user = res.data
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
      router.push('/login')
    }
  }
})
