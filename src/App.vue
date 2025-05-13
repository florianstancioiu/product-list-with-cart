<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";

const products = ref([]);
const cartItems = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch("data.json");
    const json = await response.json();

    if (!response.ok) {
      throw new Error("There was a problem fetching the products");
    }

    products.value = json;
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div>
    <main>
      <h1 class="font-bold text-4xl">Desserts</h1>
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
