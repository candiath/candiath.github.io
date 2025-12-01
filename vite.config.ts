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
      configResolved() {
        // Generar hash del CV durante el build
        const cvPath = path.join(__dirname, 'public', 'cv-portfolio.pdf')
        if (fs.existsSync(cvPath)) {
          const fileBuffer = fs.readFileSync(cvPath)
          const hashSum = crypto.createHash('md5')
          hashSum.update(fileBuffer)
          const hash = hashSum.digest('hex').substring(0, 8)
          
          // Guardar el hash en un archivo temporal
          const generatedDir = path.join(__dirname, 'src', 'generated')
          if (!fs.existsSync(generatedDir)) {
            fs.mkdirSync(generatedDir, { recursive: true })
          }
          const hashFile = path.join(generatedDir, 'cv-hash.ts')
          fs.writeFileSync(hashFile, `export const CV_HASH = '${hash}';\n`)
          console.log(`✓ CV hash generated: ${hash}`)
        }
      }
    },
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
