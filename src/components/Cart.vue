<script setup lang="ts">
import EmptyCart from "./EmptyCart.vue";
import CartItem from "./CartItem.vue";
import Button from "./Button.vue";
import { type CartItem as CartItemType } from "./CartItem.vue";

defineProps<{ items: CartItemType[] }>();
</script>

<template>
  <aside>
    <div v-if="items.length">
      <Button title="Confirm Order" />
    </div>
    <EmptyCart v-else />
  </aside>
</template>
