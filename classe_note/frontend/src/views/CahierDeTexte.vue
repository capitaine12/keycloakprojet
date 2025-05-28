<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Cahier de Texte</h1>
    <div class="mb-4">
      <label class="block mb-1">Sélectionnez une classe</label>
      <select v-model="selectedClasseId" @change="fetchDevoirs" class="p-2 border rounded w-full">
        <option disabled value="">-- Choisir une classe --</option>
        <option v-for="classe in classes" :key="classe.id" :value="classe.id">{{ classe.nom }}</option>
      </select>
    </div>

    <div v-if="devoirs.length" class="mt-4">
      <h2 class="text-xl font-semibold mb-2">Liste des Devoirs</h2>
      <ul class="space-y-2">
        <li v-for="devoir in devoirs" :key="devoir.id" class="p-4 bg-gray-100 rounded shadow">
          <p class="font-medium">{{ devoir.titre }}</p>
          <p class="text-sm text-gray-600">Date : {{ devoir.date }}</p>
          <p>{{ devoir.description }}</p>
        </li>
      </ul>
    </div>

    <div v-else-if="selectedClasseId" class="mt-4 text-gray-500">
      Aucun devoir disponible pour cette classe.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const classes = ref([])
const devoirs = ref([])
const selectedClasseId = ref('')

const fetchClasses = async () => {
  const res = await axios.get('http://localhost:8080/api/classes')
  classes.value = res.data
}

const fetchDevoirs = async () => {
  if (selectedClasseId.value) {
    const res = await axios.get(`http://localhost:8080/api/devoirs/classe/${selectedClasseId.value}`)
    devoirs.value = res.data
  }
}

onMounted(fetchClasses)
</script>