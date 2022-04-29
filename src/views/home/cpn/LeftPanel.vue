<script setup lang="ts">
import Draggable from 'vuedraggable'
import { cloneDeep } from 'lodash'
import { NScrollbar } from 'naive-ui'
import { useItemStore } from '@/store/item'
import type { IItemConfig } from '@/store/types'

const itemStore = useItemStore()

let tempId = -1
const cloneItem = (origin: IItemConfig) => {
  const clone = cloneDeep(origin)
  tempId = +new Date()
  clone.renderId = tempId
  return clone
}
const handleEnd = (e: any) => {
  if (e.to !== e.from)
    itemStore.setActiveId(tempId)
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
      :clone="cloneItem"
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
