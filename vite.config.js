import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed to absolute '/' to support client-side routing (prevents asset 404s on deep paths)
  build: {
    outDir: 'docs', // GitHub Pages serves from the 'docs' folder,
  },
})
