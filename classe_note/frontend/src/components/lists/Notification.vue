<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Notifications</h2>
    <NotificationForm :editingItem="selected" @saved="fetchData" />
    <table class="table-auto w-full mt-6">
      <thead>
        <tr>
          <th>Message</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="notif in notifications" :key="notif.id">
          <td>{{ notif.message }}</td>
          <td>{{ notif.date }}</td>
          <td>
            <button @click="edit(notif)" class="btn">Modifier</button>
            <button @click="remove(notif.id)" class="btn">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NotificationForm from '../components/forms/NotificationForm.vue'
import { NotificationService } from '../services/NotificationService.js'

const notifications = ref([])
const selected = ref(null)

const fetchData = async () => {
  notifications.value = await NotificationService.getAll()
  selected.value = null
}

const edit = (notif) => {
  selected.value = { ...notif }
}

const remove = async (id) => {
  await NotificationService.remove(id)
  fetchData()
}

onMounted(fetchData)
</script>
