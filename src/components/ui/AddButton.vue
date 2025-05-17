<script setup lang="ts">
import IconAddToCartSVG from "../../svgs/icon-add-to-cart.svg";
import IconIncrementSVG from "../../svgs/icon-increment-quantity.svg";
import IconDecrementSVG from "../../svgs/icon-decrement-quantity.svg";

defineProps<{ title: string; value: number }>();

const emit = defineEmits(["increment", "decrement"]);
</script>

<template>
  <div
    v-if="value > 0"
    class="bg-secondary w-[10rem] h-[2.5rem] px-[0.75rem] inline-flex justify-between items-center rounded-full border-[0.063rem] border-border-primary select-none text-primary gap-[0.625rem]"
  >
    <div
      @click="emit('decrement')"
      class="border-white border-[0.125rem] rounded-full p-[0.125rem] h-[1.125rem] grid place-items-center cursor-pointer"
    >
      <IconDecrementSVG />
    </div>
    <p class="text-white font-semibold">{{ value }}</p>
    <div
      @click="emit('increment')"
      class="border-white border-[0.125rem] rounded-full p-[0.125rem] h-[1.125rem] grid place-items-center cursor-pointer"
    >
      <IconIncrementSVG />
    </div>
  </div>
  <div
    @click="emit('increment')"
    v-else
    class="hover:text-border-primary bg-white w-[10rem] h-[2.5rem] inline-flex justify-center items-center rounded-full border-[0.063rem] border-border-primary cursor-pointer select-none text-primary gap-[0.625rem]"
  >
    <IconAddToCartSVG />
    <span class="font-semibold">Add to Cart</span>
  </div>
</template>
