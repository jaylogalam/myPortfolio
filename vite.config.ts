import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@components": "/src/components",
      "@app": "/src/app",
    },
  },
  plugins: [react(), tailwindcss()],
});
