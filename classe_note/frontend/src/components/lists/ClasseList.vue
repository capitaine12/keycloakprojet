// 📄 src/components/classes/ClasseList.vue
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Gestion des Classes</h2>
    <ClasseForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th class="px-4 py-2">Nom</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="classe in classes" :key="classe.id">
          <td class="border px-4 py-2">{{ classe.nom }}</td>
          <td class="border px-4 py-2">
            <button @click="edit(classe)" class="bg-blue-500 text-white px-2 py-1 rounded mr-2">Modifier</button>
            <button @click="remove(classe.id)" class="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ClasseForm from './ClasseForm.vue'
import ClasseService from '@/services/classeService'

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

<style scoped>
table th, table td {
  border: 1px solid #ddd;
}
</style>