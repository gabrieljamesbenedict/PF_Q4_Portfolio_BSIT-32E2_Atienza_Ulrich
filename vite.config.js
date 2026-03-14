import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // BASE PATH:
  // '/' → root domain
  // '/repo-name/' → GitHub Pages repository
  base: process.env.VITE_BASE_URL || '/', 
});