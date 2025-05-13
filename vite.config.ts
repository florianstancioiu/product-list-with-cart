import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  base: "/product-list-with-cart/",
  plugins: [vue(), tailwindcss(), svgLoader()],
});
