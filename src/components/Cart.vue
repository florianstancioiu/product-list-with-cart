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
      <CartItem
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :amount="item.amount"
        :price="item.price"
      />
      <Button title="Confirm Order" />
    </div>
    <EmptyCart v-else />
  </aside>
</template>
