<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Gestion des Matières</h2>
    <div class="mb-4">
      <input v-model="newMatiere" placeholder="Nom de la matière" class="border p-2 rounded mr-2" />
      <button @click="createMatiere" class="bg-blue-600 text-white p-2 rounded">Ajouter</button>
    </div>
    <table class="min-w-full bg-white rounded shadow">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">ID</th>
          <th class="py-2 px-4 border-b">Nom</th>
          <th class="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="matiere in matieres" :key="matiere.id">
          <td class="py-2 px-4 border-b">{{ matiere.id }}</td>
          <td class="py-2 px-4 border-b">{{ matiere.nom }}</td>
          <td class="py-2 px-4 border-b">
            <button @click="deleteMatiere(matiere.id)" class="text-red-600">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const matieres = ref([])
const newMatiere = ref('')

const fetchMatieres = async () => {
  const response = await api.get('/matieres')
  matieres.value = response.data
}

const createMatiere = async () => {
  if (!newMatiere.value) return
  await api.post('/matieres', { nom: newMatiere.value })
  newMatiere.value = ''
  fetchMatieres()
}

const deleteMatiere = async (id) => {
  await api.delete(`/matieres/${id}`)
  fetchMatieres()
}

onMounted(fetchMatieres)
</script>