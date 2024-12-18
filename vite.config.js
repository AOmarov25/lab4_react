import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://AOmarov25.github.io/lab4_react',
  plugins: [react()],
  build: {
    outDir: 'build',
  }
})
