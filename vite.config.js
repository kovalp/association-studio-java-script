import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
  base: '/association-studio-java-script/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
        }
        },
  test: {
    setupFiles: ['./test/setup.js']
  }
});

