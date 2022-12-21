import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true  // allow remote access during development
  },
  build: {
    outDir: '../data' // deploy to ESP32 SPIFFS
  }
})