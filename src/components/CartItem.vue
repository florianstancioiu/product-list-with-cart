<script setup lang="ts">
export type CartItem = {
  name: string;
  amount: number;
  price: number;
};

defineProps<{ CartItem }>();
</script>

<template>
  <div></div>
</template>
