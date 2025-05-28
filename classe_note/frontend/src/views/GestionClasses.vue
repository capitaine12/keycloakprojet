<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Gestion des Classes</h2>

    <ClasseForm
      :classe="selectedClasse"
      @saved="loadClasses"
      @reset="resetForm"
    />

    <div class="mt-6">
      <h3 class="text-xl font-semibold mb-2">Liste des Classes</h3>
      <table class="min-w-full border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-4 py-2">ID</th>
            <th class="border px-4 py-2">Nom</th>
            <th class="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="classe in classes"
            :key="classe.id"
            class="hover:bg-gray-50"
          >
            <td class="border px-4 py-2">{{ classe.id }}</td>
            <td class="border px-4 py-2">{{ classe.nom }}</td>
            <td class="border px-4 py-2 space-x-2">
              <button
                @click="editClasse(classe)"
                class="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Modifier
              </button>
              <button
                @click="deleteClasse(classe.id)"
                class="bg-red-600 text-white px-2 py-1 rounded"
              >
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ClasseForm from '../components/forms/ClasseForm.vue';
import ClasseService from '../components/forms/ClasseService.js';

const classes = ref([]);
const selectedClasse = ref(null);

const loadClasses = async () => {
  try {
    classes.value = await ClasseService.getAll();
  } catch (error) {
    console.error('Erreur lors du chargement des classes :', error);
  }
};

const editClasse = (classe) => {
  selectedClasse.value = { ...classe };
};

const deleteClasse = async (id) => {
  if (confirm('Voulez-vous vraiment supprimer cette classe ?')) {
    try {
      await ClasseService.remove(id);
      await loadClasses();
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
    }
  }
};

const resetForm = () => {
  selectedClasse.value = null;
};

onMounted(loadClasses);
</script>
