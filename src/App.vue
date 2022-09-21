<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
import { RouterLink, RouterView } from 'vue-router'

import ComponentTest from './components/Component.vue'
import NaiveProvider from './theme/NaiveProvider.vue'
</script>

<template>
  <NaiveProvider>
    <n-message-provider>
      <header>
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />

        <div class="wrapper">
          <ComponentTest msg="Component!" />

          <h1 class="text-3xl font-bold underline text-primary">
            Test tailwind
          </h1>

          <nav class="flex space-x-5">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />
    </n-message-provider>
  </NaiveProvider>
</template>

<style scoped>
.wrapper {
  @apply flex flex-col items-center justify-center;
}
</style>
