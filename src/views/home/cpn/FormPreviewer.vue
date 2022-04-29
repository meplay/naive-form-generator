<script setup lang="ts">
import Draggable from 'vuedraggable'
import { NForm, NScrollbar } from 'naive-ui'
import DraggableItem from './DraggableItem'
import { useItemStore } from '@/store/item'

const itemStore = useItemStore()
const itemsAdded = toRef(itemStore, 'itemsAdded')

const log = (evt: any) => {
  window.console.log(evt)
}
</script>

<template>
  <n-scrollbar
    style="height: calc(100vh - 60px);"
    class="flex-1 p-12px border-r-[#efeff5] border-r-1px"
  >
    <n-form
      style="height: calc(100vh - 84px);"
      class="previewer relative cursor-default"
      label-placement="left"
    >
      <draggable
        class="h-full"
        :list="itemsAdded"
        group="components"
        item-key="tag"
        :animation="300"
        @change="log"
      >
        <template #item="{ element }">
          <draggable-item :element="element" />
        </template>
      </draggable>

      <div
        v-show="!itemsAdded.length"
        class="info"
      >
        从左侧拖入或点选组件进行表单设计
      </div>
    </n-form>
  </n-scrollbar>
</template>

<style lang="scss" scoped>
.info {
  @apply absolute top-3/7 left-0 right-0 text-center text-18px;

  letter-spacing: 4px;
  background: linear-gradient(to right, red, blue);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
