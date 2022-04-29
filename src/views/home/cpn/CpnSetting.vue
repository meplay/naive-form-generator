<script setup lang="ts">
import { NForm, NFormItem, NInput, NInputNumber, NSlider, NSwitch } from 'naive-ui'
import { useItemStore } from '@/store/item'

const itemStore = useItemStore()
const activeItem = computed(() => {
  return itemStore.itemsAdded.find(item => item.renderId === itemStore.activeId)
})
</script>

<template>
  <n-form
    v-if="activeItem"
    label-placement="left"
    class="pr-15px pt-15px"
    :label-width="90"
  >
    <n-form-item label="字段名">
      <n-input v-model:value="activeItem.field" />
    </n-form-item>

    <n-form-item label="标题">
      <n-input v-model:value="activeItem.label" />
    </n-form-item>

    <n-form-item
      v-if="activeItem.placeholder !== undefined"
      label="占位提示"
    >
      <n-input v-model:value="activeItem.placeholder" />
    </n-form-item>

    <n-form-item label="栅格宽度">
      <n-slider
        v-model:value="activeItem.span"
        :min="1" :max="24"
      />
    </n-form-item>

    <!-- <n-form-item label="组件宽度">
      <n-slider
        v-model:value="activeItem"
        :min="1" :max="24"
      />
    </n-form-item> -->

    <n-form-item label="是否必填">
      <n-switch v-model:value="activeItem.required" />
    </n-form-item>

    <!-- 文本型 -->
    <template v-if="activeItem.component.name === 'Input'">
      <n-form-item label="最多输入">
        <n-input-number v-model:value="activeItem.maxLength" />
      </n-form-item>
      <n-form-item label="输入统计">
        <n-switch v-model:value="activeItem.counter" />
      </n-form-item>
    </template>
  </n-form>
</template>

<style lang="scss" scoped></style>
