<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <button
    class="bg-secondary flex w-full justify-center items-center font-semibold cursor-pointer text-white rounded-full h-[3.125rem]"
  >
    {{ title }}
  </button>
</template>
