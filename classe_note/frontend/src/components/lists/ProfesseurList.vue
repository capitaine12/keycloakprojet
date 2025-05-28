<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Gestion des Professeurs</h2>
    <ProfesseurForm :editingItem="selected" @saved="fetchData" />

    <table class="table-auto w-full mt-6 border border-gray-300">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2 border">Nom</th>
          <th class="px-4 py-2 border">Email</th>
          <th class="px-4 py-2 border">Téléphone</th>
          <th class="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="professeur in professeurs" :key="professeur.id" class="text-center">
          <td class="px-4 py-2 border">{{ professeur.nom }}</td>
          <td class="px-4 py-2 border">{{ professeur.email }}</td>
          <td class="px-4 py-2 border">{{ professeur.telephone }}</td>
          <td class="px-4 py-2 border">
            <button @click="edit(professeur)" class="bg-blue-500 text-white px-3 py-1 rounded mr-2">Modifier</button>
            <button @click="remove(professeur.id)" class="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProfesseurForm from '../components/forms/ProfesseurForm.vue'
import { ProfesseurService } from '../services/ProfesseurService.js'

const professeurs = ref([])
const selected = ref(null)

const fetchData = async () => {
  professeurs.value = await ProfesseurService.getAll()
  selected.value = null
}

const edit = (professeur) => {
  selected.value = { ...professeur }
}

const remove = async (id) => {
  await ProfesseurService.remove(id)
  fetchData()
}

onMounted(fetchData)
</script>
