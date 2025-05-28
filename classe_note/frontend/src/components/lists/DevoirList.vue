<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Gestion des Classes</h2>
    <ClasseForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="classe in classes" :key="classe.id">
          <td>{{ classe.nom }}</td>
          <td>
            <button @click="edit(classe)" class="btn">Modifier</button>
            <button @click="remove(classe.id)" class="btn">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ClasseForm from '../components/forms/ClasseForm.vue'
import { ClasseService } from '../services/ClasseService.js'

const classes = ref([])
const selected = ref(null)

const fetchData = async () => {
  classes.value = await ClasseService.getAll()
  selected.value = null
}

const edit = (classe) => {
  selected.value = { ...classe }
}

const remove = async (id) => {
  await ClasseService.remove(id)
  fetchData()
}

onMounted(fetchData)
</script>