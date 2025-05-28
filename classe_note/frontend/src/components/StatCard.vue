<template>
  <div class="bg-white rounded shadow p-4 text-center">
    <h3 class="text-gray-500 text-sm">{{ title }}</h3>
    <p class="text-2xl font-bold text-blue-600">{{ count }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  count: Number
})
</script>