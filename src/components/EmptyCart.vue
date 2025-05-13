<script setup lang="ts">
import EmptyCart from "./EmptyCart.vue";
import CartItem from "./CartItem.vue";
import { type CartItem as CartItemType } from "./CartItem.vue";

defineProps<{ items: CartItemType[] }>();
</script>

<template>
  <div>
    <p>Your Cart (0)</p>
    <div>
      <img src="" alt="" />
    </div>
    <p>Your added items will appear here</p>
  </div>
</template>
