import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // change this to your desired port
    strictPort: true,
  },
  plugins: [react()],
});
