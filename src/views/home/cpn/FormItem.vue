<script setup lang="ts">
interface Props {
  element: any
}

defineProps<Props>()
</script>

<template>
  <div>
    <component :is="element.tag" />
  </div>
</template>

<style lang="scss" scoped></style>
