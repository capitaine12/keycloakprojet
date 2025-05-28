<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-4 shadow-md rounded mb-6">
    <div class="mb-4">
      <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
      <input v-model="form.nom" type="text" id="nom" class="mt-1 block w-full border border-gray-300 rounded px-3 py-2" required />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input v-model="form.email" type="email" id="email" class="mt-1 block w-full border border-gray-300 rounded px-3 py-2" required />
    </div>

    <div class="mb-4">
      <label for="telephone" class="block text-sm font-medium text-gray-700">Téléphone</label>
      <input v-model="form.telephone" type="text" id="telephone" class="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div class="flex justify-end">
      <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
        {{ editingItem?.id ? 'Mettre à jour' : 'Ajouter' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch, toRefs } from 'vue'
import { ProfesseurService } from '../../services/ProfesseurService.js'

const emit = defineEmits(['saved'])
const props = defineProps({
  editingItem: Object
})

const form = reactive({
  id: null,
  nom: '',
  email: '',
  telephone: ''
})

watch(() => props.editingItem, (newValue) => {
  if (newValue) {
    Object.assign(form, newValue)
  } else {
    resetForm()
  }
})

const handleSubmit = async () => {
  if (form.id) {
    await ProfesseurService.update(form.id, form)
  } else {
    await ProfesseurService.create(form)
  }
  emit('saved')
  resetForm()
}

const resetForm = () => {
  form.id = null
  form.nom = ''
  form.email = ''
  form.telephone = ''
}
</script>