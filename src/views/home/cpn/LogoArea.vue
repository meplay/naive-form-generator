<script setup lang="ts">
import { useConstant } from '@/hooks/use-constant'

const { appTitle, githubUrl } = useConstant()
</script>

<template>
  <div class="h-60px flex justify-between items-center border-b-[#efeff5] border-b-1px px-10px">
    <div class="flex items-center">
      <icon-logo class="w-30px h-30px mr-1" />
      <h1 class="inline-block text-[#5fbc21] text-16px font-500">
        {{ appTitle }}
      </h1>
    </div>
    <a class="h-30px" :href="githubUrl" target="_blank">
      <icon-github class="w-30px h-30px" />
    </a>
  </div>
</template>
