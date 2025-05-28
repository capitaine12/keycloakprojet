<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Liste des Devoirs</h2>
    <table class="min-w-full bg-white rounded shadow">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Titre</th>
          <th class="py-2 px-4 border-b">Classe</th>
          <th class="py-2 px-4 border-b">Matière</th>
          <th class="py-2 px-4 border-b">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="devoir in devoirs" :key="devoir.id">
          <td class="py-2 px-4 border-b">{{ devoir.titre }}</td>
          <td class="py-2 px-4 border-b">{{ devoir.classe.nom }}</td>
          <td class="py-2 px-4 border-b">{{ devoir.matiere.nom }}</td>
          <td class="py-2 px-4 border-b">{{ new Date(devoir.date).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const devoirs = ref([])

onMounted(async () => {
  try {
    const response = await api.get('/devoirs')
    devoirs.value = response.data
  } catch (error) {
    console.error('Erreur lors du chargement des devoirs', error)
  }
})
</script>
