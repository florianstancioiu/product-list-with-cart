import { defineStore } from "pinia";
import { type Product } from "../components/Product.vue";

export type CartProduct = Product & { amount: number };

export type Store = {
  products: Product[];
  cartItems: CartProduct[];
};

export const useShopStore = defineStore("shop", {
  state: (): Store => ({ products: [], cartItems: [] }),
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
    updateCartItems(product: CartProduct) {
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
