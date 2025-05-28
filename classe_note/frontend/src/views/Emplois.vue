<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Emploi du Temps</h2>
    <table class="min-w-full bg-white rounded shadow">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Classe</th>
          <th class="py-2 px-4 border-b">Jour</th>
          <th class="py-2 px-4 border-b">Heure</th>
          <th class="py-2 px-4 border-b">Matière</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emploi in emplois" :key="emploi.id">
          <td class="py-2 px-4 border-b">{{ emploi.classe.nom }}</td>
          <td class="py-2 px-4 border-b">{{ emploi.jour }}</td>
          <td class="py-2 px-4 border-b">{{ emploi.heure }}</td>
          <td class="py-2 px-4 border-b">{{ emploi.matiere.nom }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const emplois = ref([])

const fetchEmplois = async () => {
  const response = await api.get('/emplois')
  emplois.value = response.data
}

onMounted(fetchEmplois)
</script>