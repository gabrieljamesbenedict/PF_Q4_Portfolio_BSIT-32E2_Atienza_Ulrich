import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PF_Q4_Portfolio_BSIT-32E2_Atienza_Ulrich/', // <- repo name
});