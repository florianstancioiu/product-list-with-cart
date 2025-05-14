<script setup lang="ts">
import { ref, onMounted } from "vue";
import Product, { type Product as ProductType } from "./components/Product.vue";
import Cart from "./components/Cart.vue";

export type CartItem = ProductType & { amount: number };

const products = ref<ProductType[]>([]);
const cartItems = ref<CartItem[]>([]);

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
const updateCartItems = (product: CartItem) => {
  if (
    cartItems.value.find((item) => item.name === product.name) === undefined
  ) {
    cartItems.value.push(product);
  } else {
    if (product.amount === 0) {
      cartItems.value = cartItems.value.filter(
        (item) => item.name !== product.name
      );
    } else if (product.amount > 0) {
      cartItems.value = cartItems.value.map((item) =>
        item.name === product.name ? product : item
      );
    }
  }
};

onMounted(() => {
  fetchProducts();
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
          @update-cart-items="updateCartItems"
        />
      </div>
    </main>
    <Cart :items="cartItems" />
  </div>
</template>
