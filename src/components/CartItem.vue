<script setup lang="ts">
import IconRemoveItemSVG from "../svgs/icon-remove-item.svg";
import { type Product } from "./Product.vue";
import { useShopStore } from "../store/shopStore";

defineProps<Product>();

const shopStore = useShopStore();
const { removeCartItem } = shopStore;
</script>

<template>
  <div
    class="border-b-[0.063rem] border-border-secondary flex justify-between items-center pb-[1.25rem] mt-[1.25rem]"
  >
    <div class="text-[1rem]">
      <p class="font-semibold mb-[1rem]">{{ name }}</p>
      <div>
        <p class="text-border-primary font-semibold inline-block mr-[1.125rem]">
          {{ amount }}x
        </p>
        <p class="text-grey font-normal inline-block mr-[0.625rem]">
          @ ${{ price.toFixed(2) }}
        </p>
        <p class="text-grey-secondary font-semibold inline-block">
          ${{ (amount * price).toFixed(2) }}
        </p>
      </div>
    </div>
    <div>
      <div
        @click="removeCartItem(name)"
        class="border-grey border-[0.125rem] rounded-full p-[0.125rem] h-[1.125rem] w-[1.125rem] grid place-items-center cursor-pointer"
      >
        <IconRemoveItemSVG class="text-grey" />
      </div>
    </div>
  </div>
</template>
