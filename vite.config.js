import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: process.env.VITE_BASE_URL || '/', // <- dynamic,
  base: "/pf-q4-portfolio-bsit-32e2-atienza-ulrich/",
  build: {
    outDir: 'docs'
  }
});