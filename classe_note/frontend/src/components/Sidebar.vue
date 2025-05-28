<template>
  <aside class="w-64 h-screen bg-gray-800 text-white fixed">
    <div class="p-4 text-2xl font-bold border-b border-gray-700">
      Cahier de Texte
    </div>
    <nav class="mt-4">
      <ul class="space-y-2 px-4">
        <li>
          <router-link to="/" class="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/classes" class="block py-2 px-3 rounded hover:bg-gray-700">Gestion des Classes</router-link>
        </li>
        <li>
          <router-link to="/matieres" class="block py-2 px-3 rounded hover:bg-gray-700">Gestion des Matières</router-link>
        </li>
        <li>
          <router-link to="/emplois" class="block py-2 px-3 rounded hover:bg-gray-700">Emploi du Temps</router-link>
        </li>
        <li>
          <router-link to="/devoirs" class="block py-2 px-3 rounded hover:bg-gray-700">Devoirs</router-link>
        </li>
        <li>
          <router-link to="/inscriptions" class="block py-2 px-3 rounded hover:bg-gray-700">Inscriptions</router-link>
        </li>
        <li>
          <router-link to="/notifications" class="block py-2 px-3 rounded hover:bg-gray-700">Notifications</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// Pas de logique nécessaire ici pour le moment
</script>

<style scoped>
/* Pour éviter que le contenu ne passe sous la sidebar */
body {
  padding-left: 16rem; /* correspond à w-64 */
}
</style>

