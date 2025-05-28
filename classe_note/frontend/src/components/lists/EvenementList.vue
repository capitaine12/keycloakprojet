<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Gestion des Événements</h2>
    <EvenementForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Date</th>
          <th>Classe</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evenement in evenements" :key="evenement.id">
          <td>{{ evenement.nom }}</td>
          <td>{{ evenement.date }}</td>
          <td>{{ evenement.classe.nom }}</td>
          <td>
            <button @click="edit(evenement)" class="btn">Modifier</button>
            <button @click="remove(evenement.id)" class="btn">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EvenementForm from '../components/forms/EvenementForm.vue'
import { EvenementService } from '@/services/EvenementService.js'

const evenements = ref([])
const selected = ref(null)

const fetchData = async () => {
  evenements.value = await EvenementService.getAll()
  selected.value = null
}

const edit = (evenement) => {
  selected.value = { ...evenement }
}

const remove = async (id) => {
  await EvenementService.remove(id)
  fetchData()
}

onMounted(fetchData)
</script>

