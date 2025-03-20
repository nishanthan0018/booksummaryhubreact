import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',  // or adjust to the correct folder if index.html is elsewhere
  build: {
    outDir: '../dist',  // Optional: specify the output directory
  },
});
