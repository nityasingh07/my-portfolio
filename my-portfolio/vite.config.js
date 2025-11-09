import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 👈 Import the Tailwind plugin
import tailwindcss from '@tailwindcss/vite' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 👈 Add the Tailwind plugin here
    tailwindcss(), 
  ],
})
