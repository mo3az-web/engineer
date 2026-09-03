import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      tailwindcss()
       
      
  ],
  base: process.env.VITE_BASE_PATH || "/https://engineering-ztpc-theta.vercel.app",
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
