// Import defineConfig and react plugin from their respective packages
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Adjust this if you're using custom aliases
    },
  },
});
