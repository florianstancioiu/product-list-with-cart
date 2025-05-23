<script setup lang="ts">
import { type Product } from "./Product.vue";

defineProps<Product>();
</script>

<template>
  <div
    class="border-b-[0.063rem] border-border-secondary pb-[1.25rem] mt-[1.25rem] flex justify-between items-center"
  >
    <div class="flex gap-[1rem] items-center">
      <div class="w-[3rem] h-[3rem]">
        <img
          class="w-full object-cover rounded-[0.5rem]"
          :src="image.thumbnail"
          :alt="name + ' thumbnail image'"
        />
      </div>
      <div class="text-[1rem]">
        <p class="font-semibold mb-[0.875rem]">{{ name }}</p>
        <div>
          <p
            class="text-border-primary font-semibold inline-block mr-[1.125rem]"
          >
            {{ amount }}x
          </p>
          <p class="text-grey font-normal inline-block mr-[0.625rem]">
            @ ${{ price.toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <p class="font-semibold inline-block">
        ${{ (amount * price).toFixed(2) }}
      </p>
    </div>
  </div>
</template>
