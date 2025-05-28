<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Gestion des Classes</h2>
    <div class="mb-4">
      <input v-model="newClass" placeholder="Nom de la classe" class="border p-2 rounded mr-2" />
      <button @click="createClass" class="bg-blue-600 text-white p-2 rounded">Ajouter</button>
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
        <tr v-for="classe in classes" :key="classe.id">
          <td class="py-2 px-4 border-b">{{ classe.id }}</td>
          <td class="py-2 px-4 border-b">{{ classe.nom }}</td>
          <td class="py-2 px-4 border-b">
            <button @click="deleteClass(classe.id)" class="text-red-600">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const classes = ref([])
const newClass = ref('')

const fetchClasses = async () => {
  const response = await api.get('/classes')
  classes.value = response.data
}

const createClass = async () => {
  if (!newClass.value) return
  await api.post('/classes', { nom: newClass.value })
  newClass.value = ''
  fetchClasses()
}

const deleteClass = async (id) => {
  await api.delete(`/classes/${id}`)
  fetchClasses()
}

onMounted(fetchClasses)
</script>