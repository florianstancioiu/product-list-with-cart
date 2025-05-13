<script setup lang="ts">
import IconAddToCartSVG from "../svgs/icon-add-to-cart.svg";

defineProps<{ title: string; value: number }>();
</script>

<template>
  <div v-if="value > 0" class="bg-secondary"></div>
  <div
    v-else
    class="bg-white px-[1.625rem] h-[2.5rem] inline-flex justify-between items-center rounded-full border-[0.063rem] border-border-primary cursor-pointer select-none text-primary gap-[0.625rem]"
  >
    <IconAddToCartSVG />
    <span class="font-semibold">Add to Cart</span>
  </div>
</template>
