// vite.config.ts
import { defineConfig } from "file:///D:/webopage-main-/node_modules/vite/dist/node/index.js";
import react from "file:///D:/webopage-main-/node_modules/@vitejs/plugin-react-swc/index.mjs";
import sitemap from "file:///D:/webopage-main-/node_modules/vite-plugin-sitemap/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\webopage-main-";
var vite_config_default = defineConfig({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://formforge.com",
      // Change this to your actual domain
      readable: true,
      // ✅ Correct format: Just an array of strings
      dynamicRoutes: ["/", "/about", "/gallery", "/contact", "/press"]
    })
  ],
  build: {
    outDir: "dist",
    copyPublicDir: true
    // Ensure sitemap.xml is copied
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJvcGFnZS1tYWluLVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd2Vib3BhZ2UtbWFpbi1cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dlYm9wYWdlLW1haW4tL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgc2l0ZW1hcCBmcm9tIFwidml0ZS1wbHVnaW4tc2l0ZW1hcFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHNpdGVtYXAoe1xuICAgICAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9mb3JtZm9yZ2UuY29tXCIsIC8vIENoYW5nZSB0aGlzIHRvIHlvdXIgYWN0dWFsIGRvbWFpblxuICAgICAgcmVhZGFibGU6IHRydWUsXG4gICAgICAvLyBcdTI3MDUgQ29ycmVjdCBmb3JtYXQ6IEp1c3QgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgZHluYW1pY1JvdXRlczogW1wiL1wiLCBcIi9hYm91dFwiLCBcIi9nYWxsZXJ5XCIsIFwiL2NvbnRhY3RcIiwgXCIvcHJlc3NcIl0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICBjb3B5UHVibGljRGlyOiB0cnVlLCAvLyBFbnN1cmUgc2l0ZW1hcC54bWwgaXMgY29waWVkXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TyxTQUFTLG9CQUFvQjtBQUN0USxPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsTUFDVixVQUFVO0FBQUE7QUFBQSxNQUVWLGVBQWUsQ0FBQyxLQUFLLFVBQVUsWUFBWSxZQUFZLFFBQVE7QUFBQSxJQUNqRSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBO0FBQUEsRUFDakI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
