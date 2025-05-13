<script setup lang="ts">
import EmptyCart from "./EmptyCart.vue";
import CartItem from "./CartItem.vue";
import { type CartItem as CartItemType } from "./CartItem.vue";

defineProps<{ items: CartItemType[] }>();
</script>

<template>
  <aside>
    <div v-if="items.length"></div>
    <EmptyCart v-else />
  </aside>
</template>
