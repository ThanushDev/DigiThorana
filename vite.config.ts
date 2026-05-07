import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages වල රිපොසිටරි එකේ නම මෙතනට දෙන්න
  base: '/DigiThorana/', 
})
