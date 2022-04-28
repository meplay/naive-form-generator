<script setup lang="ts">
import Draggable from 'vuedraggable'
import { generatorList } from '../config/generator-config'

const log = (evt: any) => {
  window.console.log(evt)
}
</script>

<template>
  <n-scrollbar
    style="max-height: calc(100vh - 60px);"
    class="select-none flex-1 p-10px border-r-[#efeff5] border-r-1px"
  >
    <draggable
      class="grid grid-cols-2 gap-10px"
      :list="generatorList"
      :group="{ name: 'people', pull: 'clone', put: false }"
      item-key="tag"
      :sort="false"
      @change="log"
    >
      <template #item="{ element }">
        <div class="drag-item pl-10px border-1px border-dashed h-40px cursor-move flex items-center">
          <component
            :is="`icon-${element.icon}`"
            class="w-20px h-20px"
          />
          <span class="ml-10px">{{ element.label }}</span>
        </div>
      </template>
    </draggable>
  </n-scrollbar>
</template>

<style lang="scss" scoped>
$primaryColor: #5fbc21;

.drag-item {
  color: #666;

  &:hover {
    color: $primaryColor;
    border-color: $primaryColor;
  }
}
</style>
