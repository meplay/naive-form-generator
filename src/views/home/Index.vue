<script setup lang="ts">
import LogoArea from './cpn/LogoArea.vue'
import LeftPanel from './cpn/LeftPanel.vue'
import TopToolsBar from './cpn/TopToolsBar.vue'
import FormPreviewer from './cpn/FormPreviewer.vue'
import RightPanel from './cpn/RightPanel.vue'
</script>

<template>
  <div class="h-screen grid grid-cols-[270px,1fr,350px]">
    <div class="flex flex-col">
      <logo-area />

      <left-panel />
    </div>

    <div class="flex flex-col">
      <top-tools-bar />

      <form-previewer />
    </div>

    <right-panel />
  </div>
</template>

<style lang="scss" scoped></style>
