<script setup lang="ts">
import { NConfigProvider, type GlobalThemeOverrides } from 'naive-ui'

import { colors } from './config/colors'
import { fontSizes } from './config/typography'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: colors.brand['primary-default'],
    primaryColorHover: colors.brand['primary-light'],
    primaryColorPressed: colors.brand['primary-dark'],

    // typography,
    ...fontSizes,
  },
  Button: {},
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <slot></slot>
  </n-config-provider>
</template>

<style scoped></style>
