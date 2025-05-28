<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Bienvenue sur le Cahier de Texte Numérique</h1>
    <p class="text-lg text-gray-700">
      Cette plateforme vous permet de gérer efficacement les emplois du temps, les matières et les classes.
    </p>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-blue-100 p-4 rounded shadow">
        <h2 class="text-xl font-semibold">Classes</h2>
        <p>Gérez les classes et leurs affectations.</p>
      </div>
      <div class="bg-green-100 p-4 rounded shadow">
        <h2 class="text-xl font-semibold">Matières</h2>
        <p>Attribuez les matières aux enseignants et aux classes.</p>
      </div>
      <div class="bg-yellow-100 p-4 rounded shadow">
        <h2 class="text-xl font-semibold">Emploi du temps</h2>
        <p>Planifiez les cours par classe et enseignant.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>