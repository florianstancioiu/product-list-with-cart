<script setup lang="ts">
import { computed } from "vue";
import EmptyCart from "./EmptyCart.vue";
import CartItem from "./CartItem.vue";
import Button from "./Button.vue";
import { type CartItem as CartItemType } from "./CartItem.vue";

const props = defineProps<{ items: CartItemType[] }>();

const totalItems = computed(() => {
  return props.items.reduce((acc, item) => {
    return (acc = acc + item.amount);
  }, 0);
});
</script>

<template>
  <aside
    class="bg-white mb-[1.25rem] mt-[2.25rem] rounded-[0.5rem] px-[1.5rem] pt-[1.875rem]"
  >
    <div v-if="items.length" class="">
      <p>Your Cart ({{ totalItems }})</p>
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
