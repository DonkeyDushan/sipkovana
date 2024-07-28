import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    target: 'esnext',
  },
  resolve: {
    alias: { app: path.resolve(__dirname, './src/app') },
  },
});