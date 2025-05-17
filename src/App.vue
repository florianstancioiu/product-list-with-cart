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
  orderConfirmedModalIsOpen: modalIsOpen,
} = storeToRefs(shopStore);

onMounted(() => {
  shopStore.fetchProducts();
});
</script>

<template>
  <div>
    <main>
      <h1 class="font-bold text-4xl mt-[2.063rem] mb-[2.625rem]">Desserts</h1>
      <div class="">
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
    <Cart :items="cartItems" />
    <OrderConfirmedModal :items="cartItems" :is-open="modalIsOpen" />
  </div>
</template>
