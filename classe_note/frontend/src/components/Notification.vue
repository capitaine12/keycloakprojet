<template>
  <div v-if="notifications.length" class="w-full max-w-md mx-auto mt-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
    <ul class="space-y-4">
      <li
        v-for="(notif, index) in notifications"
        :key="index"
        class="bg-white shadow-md rounded-lg p-4 border-l-4"
        :class="{
          'border-blue-500': notif.type === 'info',
          'border-green-500': notif.type === 'success',
          'border-yellow-500': notif.type === 'warning',
          'border-red-500': notif.type === 'error'
        }"
      >
        <div class="text-sm text-gray-600">{{ formatDate(notif.date) }}</div>
        <div class="text-gray-800 font-medium mt-1">{{ notif.message }}</div>
      </li>
    </ul>
  </div>
  <div v-else class="text-center text-gray-500 mt-10">
    Aucune notification pour le moment.
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const notifications = ref([])

const fetchNotifications = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/notifications')
    notifications.value = response.data
  } catch (error) {
    console.error('Erreur lors du chargement des notifications:', error)
  }
}

const formatDate = (isoDate) => {
  const date = new Date(isoDate)
  return date.toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  fetchNotifications()
})
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
