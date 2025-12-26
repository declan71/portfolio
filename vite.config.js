import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: ['@emailjs/browser', /node_modules/]
    },
    rollupOptions: {
      external: ['@emailjs/browser'],
      output: {
        globals: {
          '@emailjs/browser': 'emailjs'
        }
      }
    }
  }
})