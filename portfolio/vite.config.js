import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: (typeof process !== 'undefined' && process.env && process.env.VITE_BASE_PATH) || '/',
})
