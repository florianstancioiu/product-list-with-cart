<script setup lang="ts">
import IconRemoveItemSVG from "../svgs/icon-remove-item.svg";
import { type Product as ProductType } from "./Product.vue";

export type CartItem = ProductType & { amount: number };

defineProps<CartItem>();

const emit = defineEmits(["removeCartItem"]);
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
          @ ${{ price }}
        </p>
        <p class="text-grey-secondary font-semibold inline-block">
          ${{ amount * price }}
        </p>
      </div>
    </div>
    <div>
      <div
        @click="() => emit('removeCartItem', name)"
        class="border-grey border-[0.125rem] rounded-full p-[0.125rem] h-[1.125rem] w-[1.125rem] grid place-items-center cursor-pointer"
      >
        <IconRemoveItemSVG class="text-grey" />
      </div>
    </div>
  </div>
</template>
