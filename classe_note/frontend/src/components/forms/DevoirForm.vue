<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label>Titre</label>
      <input v-model="form.titre" type="text" class="input w-full" required />
    </div>
    <div>
      <label>Description</label>
      <textarea v-model="form.description" class="input w-full" required></textarea>
    </div>
    <div>
      <label>Date limite</label>
      <input v-model="form.dateLimite" type="date" class="input w-full" required />
    </div>
    <div class="flex gap-2">
      <button class="btn btn-primary">{{ editing ? 'Modifier' : 'Ajouter' }}</button>
      <button type="button" class="btn btn-secondary" @click="resetForm">Annuler</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import DevoirService from '@/services/devoirService.js'

const props = defineProps({ editingItem: Object })
const emit = defineEmits(['saved'])

const form = ref({ titre: '', description: '', dateLimite: '' })
const editing = ref(false)

watch(() => props.editingItem, (newVal) => {
  if (newVal) {
    form.value = { ...newVal }
    editing.value = true
  } else {
    resetForm()
  }
})

const handleSubmit = async () => {
  editing.value
    ? await DevoirService.update(form.value.id, form.value)
    : await DevoirService.create(form.value)
  emit('saved')
  resetForm()
}

const resetForm = () => {
  form.value = { titre: '', description: '', dateLimite: '' }
  editing.value = false
}
</script>
