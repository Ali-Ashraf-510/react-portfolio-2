import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    // Disable sourcemaps in production for security (prevents source code exposure)
    sourcemap: false,
    // Enable minification for smaller bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true  // Remove console.log statements from production
      }
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        // Split vendor code into separate chunk
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'form': ['react-hook-form', 'yup', '@hookform/resolvers']
        }
      }
    }
  }
})
