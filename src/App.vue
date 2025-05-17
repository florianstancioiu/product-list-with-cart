<script setup lang="ts">
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
import { useShopStore } from "./store/shopStore";
import { storeToRefs } from "pinia";

const shopStore = useShopStore();
const { products, cartItems } = storeToRefs(shopStore);
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
        />
      </div>
    </main>
    <Cart :items="cartItems" />
  </div>
</template>
