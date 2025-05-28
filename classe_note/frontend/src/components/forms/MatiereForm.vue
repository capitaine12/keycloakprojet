<template>
  <div class="mb-6">
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Nom de la matière</label>
        <input
          v-model="form.nom"
          type="text"
          required
          class="input input-bordered w-full"
          placeholder="Ex: Mathématiques"
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
import MatiereService from '../../services/matiereService.js'

const props = defineProps({ editingItem: Object })
const emit = defineEmits(['saved'])

const form = ref({ nom: '' })
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
    await MatiereService.update(form.value.id, form.value)
  } else {
    await MatiereService.create(form.value)
  }
  emit('saved')
  resetForm()
}

const resetForm = () => {
  form.value = { nom: '' }
  editing.value = false
}
</script>
