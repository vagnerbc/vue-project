<script setup lang="ts">
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'

const display = ref<boolean>(false)
</script>

<template>
  <main>Home</main>

  <Button
    label="Open dialog"
    icon="pi pi-check"
    iconPos="right"
    @click="display = !display"
  ></Button>

  <Dialog header="Header" footer="Footer" v-model:visible="display">
    Content
  </Dialog>
</template>
