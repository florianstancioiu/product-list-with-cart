<script setup lang="ts">
import { ref } from "vue";
import AddButton from "./AddButton.vue";
import { useShopStore } from "../store/shopStore";

export type ProductImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Product = {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
};

const props = defineProps<Product>();
const shopStore = useShopStore();
const amount = ref<number>(0);

const incrementAmount = () => {
  amount.value++;
  shopStore.updateCartItems({ ...props, amount: amount.value });
};

const decrementAmount = () => {
  if (amount.value > 0) {
    amount.value--;
    shopStore.updateCartItems({ ...props, amount: amount.value });
  }
};
</script>

<template>
  <div class="mt-[1.75rem]">
    <div
      :class="`${
        amount > 0 ? 'border-border-primary' : 'border-primary-bg'
      } relative mb-[2.75rem]  border-[0.125rem] rounded-[0.5rem]`"
    >
      <img
        class="w-full rounded-[0.5rem]"
        :src="image.tablet"
        :alt="name + ' Logo'"
      />
      <div class="w-full absolute bottom-[-1.25rem] grid place-items-center">
        <AddButton
          @increment="incrementAmount"
          @decrement="decrementAmount"
          title="Add to Cart"
          :value="amount"
        />
      </div>
    </div>
    <div>
      <p class="font-normal text-[0.875rem] mb-[0.75rem]">{{ category }}</p>
      <p class="mb-[0.75rem] text-[1.125rem] font-semibold">{{ name }}</p>
      <p class="text-border-primary font-semibold text-[1.25rem]">
        ${{ price }}
      </p>
    </div>
  </div>
</template>
