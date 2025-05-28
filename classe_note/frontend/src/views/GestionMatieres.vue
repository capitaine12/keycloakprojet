<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Gestion des Matières</h2>
    <MatiereForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th class="px-4 py-2 border">Nom</th>
          <th class="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="matiere in matieres" :key="matiere.id">
          <td class="px-4 py-2 border">{{ matiere.nom }}</td>
          <td class="px-4 py-2 border">
            <button @click="edit(matiere)" class="btn bg-blue-500 text-white px-2 py-1 rounded mr-2">Modifier</button>
            <button @click="remove(matiere.id)" class="btn bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MatiereForm from '../components/forms/MatiereForm.vue'

// ✅ Correction ici : importation du service complet via export default
import MatiereService from '@/services/matiereService.js'

const matieres = ref([])
const selected = ref(null)

const fetchData = async () => {
  try {
    const response = await MatiereService.getAll()
    matieres.value = response.data
    selected.value = null
  } catch (error) {
    console.error('Erreur lors du chargement des matières :', error)
  }
}

const edit = (matiere) => {
  selected.value = { ...matiere }
}

const remove = async (id) => {
  try {
    await MatiereService.remove(id)
    fetchData()
  } catch (error) {
    console.error('Erreur lors de la suppression :', error)
  }
}

onMounted(fetchData)
</script>