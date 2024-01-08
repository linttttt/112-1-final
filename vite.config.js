import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: '/112-1-final/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        Final: resolve(root, 'Final/index.html'),
      }
    }
  }
})
