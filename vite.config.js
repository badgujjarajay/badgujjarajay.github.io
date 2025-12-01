import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for deployment.
  // If deploying to https://username.github.io/, use '/'
  // If deploying to https://username.github.io/repo-name/, use '/repo-name/'
  base: '/',
})
