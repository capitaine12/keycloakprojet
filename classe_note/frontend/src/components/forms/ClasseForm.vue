<template>
  <div class="mb-6">
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Nom de la classe</label>
        <input
          v-model="form.nom"
          type="text"
          required
          class="input input-bordered w-full"
          placeholder="Ex: Terminale C"
        />
      </div>

      <div class="flex space-x-4">
        <button type="submit" class="btn btn-primary">
          {{ editing ? 'Modifier' : 'Créer' }}
        </button>
        <button type="button" @click="resetForm" class="btn btn-secondary">
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import ClasseService from './ClasseService.js'

const props = defineProps({
  editingItem: Object
})

const emit = defineEmits(['saved'])

const form = ref({
  nom: ''
})

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
  if (editing.value) {
    await ClasseService.update(form.value.id, form.value)
  } else {
    await ClasseService.create(form.value)
  }
  emit('saved')
  resetForm()
}

const resetForm = () => {
  form.value = { nom: '' }
  editing.value = false
}
</script>

<style scoped>
.input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
}
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
.btn-primary {
  background-color: #3b82f6;
  color: white;
}
.btn-secondary {
  background-color: #6b7280;
  color: white;
}
</style>
