import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "recharts": ["recharts"],
          "framer-motion": ["framer-motion"],
          "ui-libs": ["lucide-react", "clsx", "tailwind-merge"],
        },
      },
    },
  },
})
