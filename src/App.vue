<script setup lang="ts">
import { onMounted } from "vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
import { default as OrderConfirmedModal } from "./components/modals/OrderConfirmed.vue";
import { useShopStore } from "./store/shopStore";
import { storeToRefs } from "pinia";

const shopStore = useShopStore();
const {
  products,
  cartItems,
  totalOrderPrice,
  orderConfirmedModalIsOpen: modalIsOpen,
} = storeToRefs(shopStore);
const { hideModal, startNewOrder } = shopStore;

onMounted(() => {
  shopStore.fetchProducts();
});
</script>

<template>
  <div
    class="fm:flex fm:justify-between fm:gap-[2rem] fm:align-top fm:w-[76rem] fm:mx-auto fm:items-start fm:pb-[5.625rem]"
  >
    <main class="fm:w-[50rem]">
      <a
        href="#"
        class="inline-block font-bold text-4xl mt-[2.063rem] mb-[2.625rem]"
        >Desserts</a
      >
      <div class="fm:grid fm:grid-cols-3 fm:gap-[1.375rem]">
        <Product
          v-for="product in products"
          :key="product.name"
          :name="product.name"
          :image="product.image"
          :category="product.category"
          :price="product.price"
          :amount="product.amount"
        />
      </div>
    </main>
    <Cart />
    <OrderConfirmedModal
      :items="cartItems"
      :is-open="modalIsOpen"
      :total-order-price="totalOrderPrice"
      @close-modal="hideModal"
      @new-order="startNewOrder"
    />
  </div>
</template>
