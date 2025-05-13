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
  <div>
    <div>
      <img :src="image.tablet" :alt="name + ' Logo'" />
    </div>
    <div>
      <p>{{ category }}</p>
      <p>{{ name }}</p>
      <p>${{ price }}</p>
    </div>
  </div>
</template>
