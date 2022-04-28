<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME
  .split('-')
  .map(item => `${item[0].toUpperCase()}${item.slice(1)}`)
  .join(' ')

const githubUrl = 'https://github.com/zb980921/naive-form-generator'
</script>

<template>
  <div class="h-screen grid grid-cols-[270px,1fr,350px]">
    <div class="area">
      <!-- left -->
      <div class="top justify-between px-10px">
        <div class="flex items-center">
          <icon-logo class="w-30px h-30px mr-1" />
          <h1 class="inline-block text-[#5fbc21] text-16px font-500">
            {{ appName }}
          </h1>
        </div>
        <a class="h-30px" :href="githubUrl" target="_blank">
          <icon-github class="w-30px h-30px" />
        </a>
      </div>

      <!-- 组件选择区域 -->
      <n-scrollbar
        style="max-height: calc(100vh - 60px);"
        class="flex-1 p-10px border-r-[#efeff5] border-r-1px"
      >
        <p v-for="i in 50" :key="i">
          组件选择区域
        </p>
      </n-scrollbar>
    </div>

    <!-- mid -->
    <div class="area">
      <div class="top border-r-[#efeff5] border-r-1px" />
      <!-- 表单展示区域 -->
      <n-scrollbar
        style="max-height: calc(100vh - 60px);"
        class="flex-1 p-12px border-r-[#efeff5] border-r-1px"
      >
        <p v-for="i in 50" :key="i">
          表单展示区域
        </p>
      </n-scrollbar>
    </div>

    <!-- right -->
    <div class="">
      right
    </div>
  </div>
</template>

<style lang="scss" scoped>
.area {
  @apply flex flex-col;

  > .top {
    @apply h-60px flex items-center border-b-[#efeff5] border-b-1px;
  }
}
</style>
