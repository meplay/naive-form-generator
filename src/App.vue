<script setup lang="ts">
import { NConfigProvider, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN">
    <router-view />
  </n-config-provider>
</template>

<style>
#app {
  --primary-color: #5fbc21;
}
</style>
