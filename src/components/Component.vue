<script setup lang="ts">
import IconTooling from './icons/IconTooling.vue'
defineProps<{
  msg: string
}>()
</script>

<template>
  <main>
    {{ msg }}
    <div><IconTooling /></div>
  </main>
</template>

<style scoped></style>
