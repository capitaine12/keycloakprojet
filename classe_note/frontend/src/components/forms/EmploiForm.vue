<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label>Classe</label>
      <input v-model="form.classe" type="text" required class="input w-full" />
    </div>
    <div>
      <label>Matière</label>
      <input v-model="form.matiere" type="text" required class="input w-full" />
    </div>
    <div>
      <label>Jour</label>
      <input v-model="form.jour" type="text" required class="input w-full" />
    </div>
    <div>
      <label>Heure</label>
      <input v-model="form.heure" type="text" required class="input w-full" />
    </div>
    <div class="flex gap-2">
      <button class="btn btn-primary">{{ editing ? 'Modifier' : 'Ajouter' }}</button>
      <button type="button" class="btn btn-secondary" @click="resetForm">Annuler</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import EmploiService from '@/services/emploiService.js'

const props = defineProps({ editingItem: Object })
const emit = defineEmits(['saved'])

const form = ref({ classe: '', matiere: '', jour: '', heure: '' })
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
    ? await EmploiService.update(form.value.id, form.value)
    : await EmploiService.create(form.value)
  emit('saved')
  resetForm()
}

const resetForm = () => {
  form.value = { classe: '', matiere: '', jour: '', heure: '' }
  editing.value = false
}
</script>
