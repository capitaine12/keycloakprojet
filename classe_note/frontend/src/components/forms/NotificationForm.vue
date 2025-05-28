<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label>Message</label>
      <textarea v-model="form.message" class="input w-full" required></textarea>
    </div>
    <div>
      <label>Destinataire</label>
      <input v-model="form.destinataire" type="text" class="input w-full" />
    </div>
    <div class="flex gap-2">
      <button class="btn btn-primary">{{ editing ? 'Modifier' : 'Envoyer' }}</button>
      <button type="button" class="btn btn-secondary" @click="resetForm">Annuler</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import NotificationService from '@/services/notificationService.js'

const props = defineProps({ editingItem: Object })
const emit = defineEmits(['saved'])

const form = ref({ message: '', destinataire: '' })
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
    ? await NotificationService.update(form.value.id, form.value)
    : await NotificationService.create(form.value)
  emit('saved')
  resetForm()
}

const resetForm = () => {
  form.value = { message: '', destinataire: '' }
  editing.value = false
}
</script>
