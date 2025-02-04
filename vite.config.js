import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  server: {
    host: '0.0.0.0',  // or specify your local IP address like '192.168.x.x'
    port: 3000,        // Default port, or specify another port if needed
  },

  plugins: [tailwindcss()],
});
