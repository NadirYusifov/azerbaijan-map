import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "amcharts-vendor": [
            "@amcharts/amcharts4/core",
            "@amcharts/amcharts4/maps",
            "@amcharts/amcharts4-geodata/azerbaijanHigh",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 800,
    minify: "esbuild",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
