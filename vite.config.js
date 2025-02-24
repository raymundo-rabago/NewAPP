import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from "vite";

 
export default defineConfig({
  plugins: [
    react(),
    reactRouter(),
    VitePWA({
      injectRegister: 'inline'
    })
  ]
})
