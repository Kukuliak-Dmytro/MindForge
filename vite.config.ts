import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/MindForge/",
  //hides the message anout legacy js api
  css:{
    preprocessorOptions:{
      scss:{
        api:'modern-compiler'
      }
    }
  }
})
