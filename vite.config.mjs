import { defineConfig } from "vite";
import { resolve } from "path";

import htmlMinifier from "vite-plugin-html-minifier";
import inlineSource from "vite-plugin-inline-source";

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
    inlineSource({
      optimizeCss: true,
    }),
    htmlMinifier({
      minify: true,
    }),
  ],
});
