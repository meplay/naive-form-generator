<script setup lang="ts">
import Draggable from 'vuedraggable'

const list2 = reactive([
  { name: 'Juan', id: 5 },
  { name: 'Edgard', id: 6 },
  { name: 'Johnson', id: 7 },
])

const log = (evt: any) => {
  window.console.log(evt)
}
</script>

<template>
  <n-scrollbar
    style="max-height: calc(100vh - 60px);"
    class="flex-1 p-12px border-r-[#efeff5] border-r-1px"
  >
    <draggable
      class="dragArea list-group"
      :list="list2"
      group="people"
      item-key="name"
      @change="log"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </n-scrollbar>
</template>

<style lang="scss" scoped></style>
