import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Adjust this if you're using custom aliases
    },
  },
});
