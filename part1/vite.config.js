import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-perusteet-02-soveltavat-tehtavat-03-anekdootit",

  plugins: [react()],
})
