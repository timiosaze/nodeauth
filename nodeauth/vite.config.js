import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 👈 no /api here
        changeOrigin: true,
        // no rewrite: keep /api prefix so it hits /api/v1/test on the backend
      },
    },
  },
});
