<script setup lang="ts">
import { Button } from 'flowbite-vue'
</script>

<template>
  <main>Home</main>
  <Button class="btn-primary">test flowbite</Button>
  <Button class="btn-custom">test custom</Button>
  <Button color="red">new</Button>
</template>

<style>
.btn-custom {
  @apply text-white bg-secondary hover:bg-secondary !important;
}
</style>
