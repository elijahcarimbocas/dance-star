import { defineConfig } from "vite";

// The site is a single self-contained index.html (inline CSS/JS, no local assets).
// Vite is only here for convenient local dev (`npm run dev`) with live reload.
// `base: "./"` keeps any future asset URLs relative so the build works at the
// GitHub Pages sub-path (https://elijahcarimbocas.github.io/dance-star/).
export default defineConfig({
  base: "./",
  server: {
    host: true,
    port: 8080,
  },
});
