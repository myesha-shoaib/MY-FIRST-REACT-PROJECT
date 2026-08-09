import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MY-FIRST-REACT-PROJECT/',
  build: {
    outDir: 'docs'
  }
})