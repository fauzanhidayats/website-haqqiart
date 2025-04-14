import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html", // File index.html utama
        karya: "./karya.html", // Tambahkan karya.html di sini
      },
    },
  },
});
