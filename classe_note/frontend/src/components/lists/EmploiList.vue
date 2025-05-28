<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Emploi du temps</h2>
    <EmploiForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th>Jour</th>
          <th>Heure</th>
          <th>Classe</th>
          <th>Matière</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emploi in emplois" :key="emploi.id">
          <td>{{ emploi.jour }}</td>
          <td>{{ emploi.heure }}</td>
          <td>{{ emploi.classe.nom }}</td>
          <td>{{ emploi.matiere.nom }}</td>
          <td>
            <button @click="edit(emploi)" class="btn">Modifier</button>
            <button @click="remove(emploi.id)" class="btn">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EmploiForm from '../components/forms/EmploiForm.vue'
import { EmploiService } from '../services/EmploiService.js'

const emplois = ref([])
const selected = ref(null)

const fetchData = async () => {
  emplois.value = await EmploiService.getAll()
  selected.value = null
}

const edit = (emploi) => {
  selected.value = { ...emploi }
}

const remove = async (id) => {
  await EmploiService.remove(id)
  fetchData()
}

onMounted(fetchData)
</script>