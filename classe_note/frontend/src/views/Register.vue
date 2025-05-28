<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-4">Inscription</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-gray-700">Nom complet</label>
          <input v-model="name" type="text" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Mot de passe</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">S'inscrire</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const register = async () => {
  try {
    await authStore.register({ name: name.value, email: email.value, password: password.value })
    router.push('/dashboard')
  } catch (error) {
    alert('Inscription échouée')
  }
}
</script>
