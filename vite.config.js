import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@emailjs/browser': '@emailjs/browser'
    }
  },
  build: {
    rollupOptions: {
      external: ['@emailjs/browser']
    }
  }
})