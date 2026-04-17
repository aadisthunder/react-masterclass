import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config kept minimal so every project starts clean.
export default defineConfig({
  plugins: [react()],
});
