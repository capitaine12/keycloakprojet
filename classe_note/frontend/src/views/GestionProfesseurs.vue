<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Gestion des Professeurs</h1>

    <!-- Formulaire d'ajout/édition -->
    <form @submit.prevent="saveProfesseur" class="mb-6 bg-white p-4 rounded shadow">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input v-model="form.nom" type="text" placeholder="Nom" class="input" required />
        <input v-model="form.prenom" type="text" placeholder="Prénom" class="input" required />
        <input v-model="form.email" type="email" placeholder="Email" class="input" required />
        <input v-model="form.matiere" type="text" placeholder="Matière" class="input" required />
      </div>
      <div class="mt-4">
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {{ form.id ? 'Mettre à jour' : 'Ajouter' }}
        </button>
        <button type="button" @click="resetForm" class="ml-2 text-gray-600">Annuler</button>
      </div>
    </form>

    <!-- Tableau des professeurs -->
    <table class="min-w-full bg-white rounded shadow">
      <thead>
        <tr class="bg-gray-100 text-left text-sm font-semibold text-gray-700">
          <th class="px-4 py-2">Nom</th>
          <th class="px-4 py-2">Prénom</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Matière</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prof in professeurs" :key="prof.id" class="border-t">
          <td class="px-4 py-2">{{ prof.nom }}</td>
          <td class="px-4 py-2">{{ prof.prenom }}</td>
          <td class="px-4 py-2">{{ prof.email }}</td>
          <td class="px-4 py-2">{{ prof.matiere }}</td>
          <td class="px-4 py-2">
            <button @click="editProfesseur(prof)" class="text-blue-600 hover:underline mr-2">Modifier</button>
            <button @click="deleteProfesseur(prof.id)" class="text-red-600 hover:underline">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from '@/services/axios'

export default {
  name: 'GestionProfesseurs',
  data() {
    return {
      professeurs: [],
      form: {
        id: null,
        nom: '',
        prenom: '',
        email: '',
        matiere: ''
      }
    }
  },
  created() {
    this.loadProfesseurs()
  },
  methods: {
    async loadProfesseurs() {
      try {
        const res = await axios.get('/api/professeurs')
        this.professeurs = res.data
      } catch (err) {
        console.error(err)
      }
    },
    async saveProfesseur() {
      try {
        if (this.form.id) {
          await axios.put(`/api/professeurs/${this.form.id}`, this.form)
        } else {
          await axios.post('/api/professeurs', this.form)
        }
        this.resetForm()
        this.loadProfesseurs()
      } catch (err) {
        console.error(err)
      }
    },
    editProfesseur(prof) {
      this.form = { ...prof }
    },
    async deleteProfesseur(id) {
      if (confirm('Voulez-vous vraiment supprimer ce professeur ?')) {
        try {
          await axios.delete(`/api/professeurs/${id}`)
          this.loadProfesseurs()
        } catch (err) {
          console.error(err)
        }
      }
    },
    resetForm() {
      this.form = {
        id: null,
        nom: '',
        prenom: '',
        email: '',
        matiere: ''
      }
    }
  }
}
</script>

