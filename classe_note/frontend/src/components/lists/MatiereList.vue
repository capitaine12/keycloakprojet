<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Gestion des Matières</h2>
    <MatiereForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="matiere in matieres" :key="matiere.id">
          <td>{{ matiere.nom }}</td>
          <td>
            <button @click="edit(matiere)" class="btn">Modifier</button>
            <button @click="remove(matiere.id)" class="btn">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MatiereForm from '../components/forms/MatiereForm.vue'
import { MatiereService } from '../services/MatiereService.js'

const matieres = ref([])
const selected = ref(null)

const fetchData = async () => {
  matieres.value = await MatiereService.getAll()
  selected.value = null
}

const edit = (matiere) => {
  selected.value = { ...matiere }
}

const remove = async (id) => {
  await MatiereService.remove(id)
  fetchData()
}

onMounted(fetchData)
</script>
