import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://formforge.com", // Change this to your actual domain
      readable: true,
      // ✅ Correct format: Just an array of strings
      dynamicRoutes: ["/", "/about", "/gallery", "/contact", "/press"],
    }),
  ],
  build: {
    outDir: "dist",
    copyPublicDir: true, // Ensure sitemap.xml is copied
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
