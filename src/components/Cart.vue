<script setup lang="ts">
import EmptyCart from "./EmptyCart.vue";
import IconCarbonNeutralSVG from "../svgs/icon-carbon-neutral.svg";
import CartItem from "./CartItem.vue";
import Button from "./Button.vue";
import { useShopStore } from "../store/shopStore";
import { storeToRefs } from "pinia";

const shopStore = useShopStore();
const {
  cartItems: items,
  totalCartItems,
  totalOrderPrice,
} = storeToRefs(shopStore);
</script>

<template>
  <aside
    class="bg-white mb-[1.25rem] mt-[2.25rem] rounded-[0.5rem] px-[1.5rem] pt-[1.875rem]"
  >
    <div v-if="items.length" class="">
      <p class="font-bold text-2xl mb-[2.188rem] text-border-primary">
        Your Cart ({{ totalCartItems }})
      </p>
      <div>
        <CartItem
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :category="item.category"
          :image="item.image"
          :amount="item.amount"
          :price="item.price"
        />
      </div>
      <div class="mb-[1.25rem] pt-[1.25rem] flex justify-between items-center">
        <p class="text-[0.875rem]">Order Total</p>
        <p class="text-2xl text-primary font-semibold">
          ${{ totalOrderPrice }}
        </p>
      </div>
      <div
        class="rounded-[0.5rem] mb-[1.5rem] h-[3.25rem] bg-primary-bg flex justify-center items-center gap-[0.625rem]"
      >
        <IconCarbonNeutralSVG />
        <p class="text-[0.875rem]">
          This is a <span class="font-semibold">carbon-neutral</span> delivery
        </p>
      </div>
      <div class="pb-[1.5rem]">
        <Button title="Confirm Order" />
      </div>
    </div>
    <EmptyCart v-else />
  </aside>
</template>
