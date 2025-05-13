<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="bg-secondary">
    {{ title }}
  </div>
</template>
