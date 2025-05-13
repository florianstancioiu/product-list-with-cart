<script setup lang="ts">
export type ProductImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

defineProps<{
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}>();
</script>

<template>
  <div class="mt-[1.75rem] border-primary-bg border-[0.063rem]">
    <div class="mb-[2.75rem]">
      <img
        class="w-full rounded-[0.5rem]"
        :src="image.tablet"
        :alt="name + ' Logo'"
      />
    </div>
    <div>
      <p class="font-light text-[0.875rem] mb-[0.75rem]">{{ category }}</p>
      <p class="mb-[0.75rem] text-[1.125rem] font-normal">{{ name }}</p>
      <p class="text-border-primary font-normal text-[1.25rem]">${{ price }}</p>
    </div>
  </div>
</template>
