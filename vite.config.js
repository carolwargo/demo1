import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'  // Import the visualizer plugin

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'] // Removes console.logs in production
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Common dependencies
          ui: ['@mui/material', 'framer-motion'], // UI-related libraries
        }
      }
    }
  },
  base: '/demo1/',
  plugins: [
    react(),
    visualizer({ open: true })  // Add the visualizer plugin to the plugins array
  ],
})
