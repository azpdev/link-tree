import { resolve } from "path";
import { defineConfig } from "vite";
import htmlMinifier from "vite-plugin-html-minifier";

export default defineConfig({
  appType: "mpa",
  base: "",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [
    htmlMinifier({
      minify: true,
    }),
  ],
});
