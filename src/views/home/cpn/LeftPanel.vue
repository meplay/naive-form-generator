<script setup lang="ts">
import Draggable from 'vuedraggable'
import { useItemStore } from '@/store/item'

const itemStore = useItemStore()

const log = (evt: any) => {
  window.console.log(evt)
}
const handleEnd = (e: any) => {
  if (e.to !== e.from)
    window.console.log('drag end')
}
</script>

<template>
  <n-scrollbar
    style="max-height: calc(100vh - 60px);"
    class="select-none flex-1 p-10px border-r-[#efeff5] border-r-1px"
  >
    <draggable
      class="left-panel grid grid-cols-2 gap-10px"
      :list="itemStore.itemsPreset"
      :group="{ name: 'components', pull: 'clone', put: false }"
      item-key="tag"
      :sort="false"
      @change="log"
      @end="handleEnd"
    >
      <template #item="{ element }">
        <div class="drag-item">
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
.left-panel {
  .drag-item {
    @apply pl-10px border-1px border-dashed h-40px cursor-move flex items-center text-[#666];
    transition-duration: 0ms !important;

    &:hover {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }
  }
}
</style>
