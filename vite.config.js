import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'
 
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Soluxe Admin App',
        short_name: 'Soluxe',
        description: 'Soluxe Sunglasses Boutique, panel de administración de ventas',
        theme_color: '#ffffff',
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          },
          {
            src: "/assets/icons/48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/assets/icons/72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/assets/icons/92x92.png",
            sizes: "92x92",
            type: "image/png"
          },
          {
            src: "/assets/icons/144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/assets/icons/196.png",
            sizes: "196x196",
            type: "image/png"
          },
          {
            src: "/assets/masked-icon.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/assets/masked-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: 'any'
          },
          {
            src: "/assets/masked-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: 'maskable'
          }
        ]
      }
    }),
  ]
})
