<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-4 rounded shadow mb-6">
    <div class="mb-4">
      <label for="titre" class="block font-medium mb-1">Titre</label>
      <input
        id="titre"
        v-model="form.titre"
        type="text"
        class="w-full border rounded px-3 py-2"
        required
      />
    </div>

    <div class="mb-4">
      <label for="description" class="block font-medium mb-1">Description</label>
      <textarea
        id="description"
        v-model="form.description"
        class="w-full border rounded px-3 py-2"
        required
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="date" class="block font-medium mb-1">Date</label>
      <input
        id="date"
        v-model="form.date"
        type="date"
        class="w-full border rounded px-3 py-2"
        required
      />
    </div>

    <div class="flex justify-end">
      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        {{ form.id ? 'Mettre à jour' : 'Ajouter' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import { EvenementService } from '@/services/evenementService.js'

const props = defineProps({
  editingItem: Object,
})

const emit = defineEmits(['saved'])

const form = ref({
  id: null,
  titre: '',
  description: '',
  date: ''
})

// Mettre à jour le formulaire si un élément est en cours d’édition
watch(
  () => props.editingItem,
  (newValue) => {
    if (newValue) {
      form.value = { ...newValue }
    } else {
      resetForm()
    }
  },
  { immediate: true }
)

const resetForm = () => {
  form.value = {
    id: null,
    titre: '',
    description: '',
    date: ''
  }
}

const handleSubmit = async () => {
  if (form.value.id) {
    await EvenementService.update(form.value.id, form.value)
  } else {
    await EvenementService.create(form.value)
  }
  emit('saved')
  resetForm()
}
</script>
