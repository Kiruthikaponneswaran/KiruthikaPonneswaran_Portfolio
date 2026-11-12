import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The base path MUST match your GitHub repository name for GitHub Pages.
export default defineConfig({
  base: '/KiruthikaPonneswaran_Portfolio/',
  plugins: [react()],
})
