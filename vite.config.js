import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets so it works in any subpath on GitHub Pages
  build: {
    outDir: 'docs', // GitHub Pages serves from the 'docs' folder,
  },
})
