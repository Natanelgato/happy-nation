import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // garante que olhe na raiz
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html')
    },
    outDir: 'dist'
  }
});
