<script setup lang="ts">
import { ref } from "vue";
import AddButton from "./AddButton.vue";

export type ProductImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Product = {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
};

defineProps<Product>();

const amount = ref<number>(0);
</script>

<template>
  <div class="mt-[1.75rem]">
    <div class="relative mb-[2.75rem] border-primary-bg border-[0.125rem]">
      <img
        class="w-full rounded-[0.5rem]"
        :src="image.tablet"
        :alt="name + ' Logo'"
      />
      <div class="w-full absolute bottom-[-20px] grid place-items-center">
        <AddButton title="Add to Cart" :value="amount" />
      </div>
    </div>
    <div>
      <p class="font-normal text-[0.875rem] mb-[0.75rem]">{{ category }}</p>
      <p class="mb-[0.75rem] text-[1.125rem] font-semibold">{{ name }}</p>
      <p class="text-border-primary font-semibold text-[1.25rem]">
        ${{ price }}
      </p>
    </div>
  </div>
</template>
