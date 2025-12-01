import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'cv-hash-generator',
      buildStart() {
        // Generar hash del CV al inicio del build/dev
        const cvPath = path.join(__dirname, 'public', 'cv-portfolio.pdf')
        if (fs.existsSync(cvPath)) {
          const fileBuffer = fs.readFileSync(cvPath)
          const hashSum = crypto.createHash('md5')
          hashSum.update(fileBuffer)
          const hash = hashSum.digest('hex').substring(0, 8)
          
          // Guardar el hash en un archivo
          const generatedDir = path.join(__dirname, 'src', 'generated')
          if (!fs.existsSync(generatedDir)) {
            fs.mkdirSync(generatedDir, { recursive: true })
          }
          const hashFile = path.join(generatedDir, 'cv-hash.ts')
          const content = `// Este archivo se genera automáticamente durante el build\n// No modificar manualmente\nexport const CV_HASH = '${hash}';\n`
          
          // Solo escribir si cambió para no causar hot-reload innecesario
          if (!fs.existsSync(hashFile) || fs.readFileSync(hashFile, 'utf-8') !== content) {
            fs.writeFileSync(hashFile, content)
            console.log(`✓ CV hash generated: ${hash}`)
          }
        }
      }
    },
    {
      name: 'spa-fallback',
      configureServer(server) {
        return () => {
          server.middlewares.use((req, res, next) => {
            if (req.url) {
              // Manejar redirects especiales desde public/ (como /linkedin)
              const redirectPath = path.join(__dirname, 'public', req.url, 'index.html')
              if (fs.existsSync(redirectPath) && req.url !== '/') {
                const content = fs.readFileSync(redirectPath, 'utf-8')
                res.setHeader('Content-Type', 'text/html')
                res.end(content)
                return
              }
              
              // Para rutas SPA: reescribir a / para que Vite sirva index.html
              const cleanUrl = req.url.split('?')[0].split('#')[0]
              const isAsset = cleanUrl.includes('.') || cleanUrl.startsWith('/@') || cleanUrl.startsWith('/src/')
              const publicFileExists = fs.existsSync(path.join(__dirname, 'public', cleanUrl))
              
              if (!isAsset && cleanUrl !== '/' && !publicFileExists) {
                req.url = '/'
              }
            }
            next()
          })
        }
      }
    }
  ],
  base: '/',
})
