import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/*'],
      manifest: {
        name: 'PMiller',
        short_name: 'PMiller',
        description: 'PMiller desc goes here',
        theme_color: '#ffffff'
      }
    })
  ],
})
