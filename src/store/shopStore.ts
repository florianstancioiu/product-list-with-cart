import { defineStore } from "pinia";
import { type Product } from "../components/Product.vue";

export type Store = {
  products: Product[];
  cartItems: Product[];
  orderConfirmedModalIsOpen: boolean;
};

export const useShopStore = defineStore("shop", {
  state: (): Store => ({
    products: [],
    cartItems: [],
    orderConfirmedModalIsOpen: false,
  }),
  getters: {
    totalCartItems: (state) =>
      state.cartItems.reduce((acc, item) => {
        return (acc = acc + item.amount);
      }, 0),
    totalOrderPrice: (state) =>
      state.cartItems.reduce((acc, item) => {
        return (acc = acc + item.amount * item.price);
      }, 0),
  },
  actions: {
    startNewOrder() {
      this.orderConfirmedModalIsOpen = false;
      this.cartItems = [];
      this.products = this.products.map((item) => ({ ...item, amount: 0 }));
    },
    showModal() {
      this.orderConfirmedModalIsOpen = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    hideModal() {
      this.orderConfirmedModalIsOpen = false;
    },
    incrementAmount(name: string) {
      this.products = this.products.map((product) =>
        product.name === name
          ? { ...product, amount: ++product.amount }
          : product
      );
    },
    decrementAmount(name: string) {
      const product = this.products.find((item) => item.name === name);

      if (product && product.amount > 0) {
        this.products = this.products.map((product) =>
          product.name === name
            ? { ...product, amount: --product.amount }
            : product
        );
      }
    },
    updateCartItems(name: string) {
      const product = this.products.find(
        (productItem) => productItem.name === name
      );

      if (!product) {
        return;
      }

      if (
        this.cartItems.find((item) => item.name === product.name) === undefined
      ) {
        this.cartItems.push(product);
      } else {
        if (product.amount === 0) {
          this.cartItems = this.cartItems.filter(
            (item) => item.name !== product.name
          );
        } else if (product.amount > 0) {
          this.cartItems = this.cartItems.map((item) =>
            item.name === product.name ? product : item
          );
        }
      }
    },
    removeCartItem(name: string) {
      this.cartItems = this.cartItems.filter((item) => item.name !== name);
      this.products = this.products.map((product) =>
        product.name === name ? { ...product, amount: 0 } : product
      );
    },
    async fetchProducts() {
      try {
        const response = await fetch("data.json");
        const json = await response.json();

        if (!response.ok) {
          throw new Error("There was a problem fetching the products");
        }

        this.products = json.map((jsonProduct: Product) => ({
          ...jsonProduct,
          amount: 0,
        }));
      } catch (e) {
        this.products = [];
        console.error(e);
      }
    },
  },
});
