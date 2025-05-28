<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Gestion des Devoirs</h2>
    <DevoirForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="devoir in devoirs" :key="devoir.id">
          <td>{{ devoir.titre }}</td>
          <td>{{ devoir.date }}</td>
          <td>
            <button @click="edit(devoir)" class="btn">Modifier</button>
            <button @click="remove(devoir.id)" class="btn">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DevoirForm from '../components/forms/DevoirForm.vue'
import DevoirService from '../services/devoirService.js'

const devoirs = ref([])
const selected = ref(null)

const fetchData = async () => {
  devoirs.value = await DevoirService.getAll()
  selected.value = null
}

const edit = (devoir) => {
  selected.value = { ...devoir }
}

const remove = async (id) => {
  await DevoirService.remove(id)
  fetchData()
}

onMounted(fetchData)
</script>

