import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
            return "react-vendor";
          }
          if (id.includes("node_modules/gsap")) {
            return "gsap-vendor";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "ui-vendor";
          }
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
