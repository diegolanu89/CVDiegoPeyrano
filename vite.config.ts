import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CVDiegoPeyrano/', // 👈 nombre exacto del repo
})