import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'redirect-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Conf para manejar redirects desde public/
          if (req.url) {
            const redirectPath = path.join(__dirname, 'public', req.url, 'index.html')
            if (fs.existsSync(redirectPath) && req.url !== '/') {
              const content = fs.readFileSync(redirectPath, 'utf-8')
              res.setHeader('Content-Type', 'text/html')
              res.end(content)
              return
            }
          }
          next()
        })
      }
    }
  ],
  base: '/',
})
