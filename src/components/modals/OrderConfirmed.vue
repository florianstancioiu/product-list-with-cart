<script setup lang="ts">
import IconOrderConfirmedSVG from "../../svgs/icon-order-confirmed.svg";
import Button from "../ui/Button.vue";
import ModalCartItem from "../ModalCartItem.vue";
import type { Product } from "../Product.vue";

defineProps<{ isOpen: boolean; items: Product[]; totalOrderPrice: number }>();

const emit = defineEmits(["closeModal", "newOrder"]);
</script>

<template>
  <div v-if="isOpen" class="absolute top-0 left-0 w-full h-full">
    <div
      @click="() => emit('closeModal')"
      class="absolute min-h-dvh w-full h-full bg-[rgba(116,105,101,0.5)]"
    ></div>
    <div
      class="relative z-10 bg-white mt-[6rem] rounded-[0.5rem] px-[1.5rem] w-full pt-[2.75rem] pb-[1.25rem]"
    >
      <IconOrderConfirmedSVG />
      <p class="font-bold text-4xl pt-[2.063rem] mb-[1.5rem]">
        Order <br class="fn:hidden" />Confirmed
      </p>
      <p class="text-grey mb-[2.25rem]">We hope you enjoy your food!</p>
      <div
        class="bg-primary-bg px-[1.5rem] mb-[1.875rem] pt-[0.25rem] pb-[0.1rem]"
      >
        <ModalCartItem
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :category="item.category"
          :image="item.image"
          :amount="item.amount"
          :price="item.price"
        />
        <div
          class="mb-[1.25rem] pt-[1.25rem] flex justify-between items-center"
        >
          <p class="text-[0.875rem]">Order Total</p>
          <p class="text-2xl text-primary font-semibold">
            ${{ totalOrderPrice.toFixed(2) }}
          </p>
        </div>
      </div>
      <Button @click="emit('newOrder')" title="Start New Order" />
    </div>
  </div>
</template>
