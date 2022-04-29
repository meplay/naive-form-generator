<script setup lang="ts">
import { NScrollbar, NTabPane, NTabs } from 'naive-ui'
import CpnSetting from './CpnSetting.vue'
</script>

<template>
  <n-tabs
    animated
    type="bar"
    justify-content="space-evenly"
    :tab-style="{padding: '15px 20px'}"
    :pane-style="{padding: '12px 0'}"
  >
    <n-tab-pane name="cpn-setting" tab="组件设置">
      <n-scrollbar style="max-height: calc(100vh - 75px);">
        <cpn-setting />
      </n-scrollbar>
    </n-tab-pane>

    <n-tab-pane name="form-setting" tab="表单设置">
      表单设置
    </n-tab-pane>
  </n-tabs>
</template>

<style lang="scss" scoped></style>
