<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Bienvenue sur le Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-blue-600 mb-2">Nombre de Classes</h2>
          <p class="text-gray-700 text-3xl font-bold">5</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-green-600 mb-2">Matières</h2>
          <p class="text-gray-700 text-3xl font-bold">12</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-purple-600 mb-2">Professeurs</h2>
          <p class="text-gray-700 text-3xl font-bold">8</p>
        </div>
      </div>

      <div class="mt-10">
        <p class="text-gray-600 text-center">Ceci est une version de démonstration. Connecte-toi pour voir les vraies données.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  mounted() {
    console.log("Dashboard chargé !");
  }
}
</script>

<style scoped>
/* Tu peux ajouter des styles spécifiques ici si nécessaire */
</style>