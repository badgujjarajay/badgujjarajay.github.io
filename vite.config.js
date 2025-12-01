import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to './' to allow deployment to any subdirectory (GitHub Pages project site)
  // or the root (User site). This fixes the blank page issue if paths are wrong.
  base: './',
})
