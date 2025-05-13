<script setup lang="ts">
import IllustrationEmptyCartSvg from "../svgs/illustration-empty-cart.svg";
</script>

<template>
  <div>
    <p class="font-bold text-2xl mb-[3.75rem] text-border-primary">
      Your Cart (0)
    </p>
    <div class="text-center">
      <div class="grid place-items-center mb-[2.25rem]">
        <IllustrationEmptyCartSvg />
      </div>
      <p class="font-semibold pb-[2.75rem] text-ternary">
        Your added items will appear here
      </p>
    </div>
  </div>
</template>
