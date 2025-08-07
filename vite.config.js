// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['aos'], // Critical for Vite
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Fix for jQuery plugins needing global access
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  define: {
    'window.jQuery': 'jQuery',
    'window.$': 'jQuery',
    'process.env': {}, // ✅ This prevents "process is not defined" error
  },
  optimizeDeps: {
    include: ['jquery', 'bootstrap', 'bootstrap-select'],
  },

   build: {
    sourcemap: false, // disables .map warning
  },
})
