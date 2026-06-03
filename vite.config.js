import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "gsap-vendor": ["gsap"],
          "ui-vendor": ["lucide-react"],
        },
      },
    },
    // Warn if chunk is larger than 500KB
    chunkSizeWarningLimit: 500,
  },
  server: {
    historyApiFallback: true,
  },
});
