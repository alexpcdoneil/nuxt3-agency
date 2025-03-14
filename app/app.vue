<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { $apiFetch } = useNuxtApp()

provide("apiFetch", $apiFetch)
</script>
