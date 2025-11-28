import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
      title: "API REST E-commerce",
      description:
        "Plataforma de e-commerce completa con autenticación, pagos integrados y gestión de inventario en tiempo real.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Stripe"],
      repo: "#",
    },
    {
      title: "Sistema de Microservicios",
      description:
        "Arquitectura de microservicios escalable con orquestación, load balancing y monitoreo centralizado.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis"],
      demo: "#",
    
    },
    {
      title: "CMS Headless",
      description:
        "Sistema de gestión de contenidos sin cabeza con API GraphQL, versionado y control de acceso granular.",
      technologies: ["Node.js", "GraphQL", "MongoDB", "JWT"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dashboard de analytics en tiempo real con procesamiento de eventos y visualización de datos complejos.",
      technologies: ["Node.js", "PostgreSQL", "WebSockets", "React"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Chat en Tiempo Real",
      description:
        "Aplicación de mensajería en tiempo real con encriptación end-to-end y sincronización offline-first.",
      technologies: ["Node.js", "Socket.io", "MongoDB", "Redis"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Orquestador de Tareas",
      description:
        "Sistema de cola de trabajo distribuido para procesar tareas asincrónicas a escala con reintentos automáticos.",
      technologies: ["Node.js", "Bull", "Redis", "PostgreSQL"],
      demo: "#",
      repo: "#",
    },
  ]
export const Projects = () => {
  return (
    <section className="mt-20">
      <div>
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            projects.map( (project, index) => (
              <div key={index} className="group p-6 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary">
                <h3 className="">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map( (tech) => (
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/20">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  { project.demo ? 
                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  : ''}
                  {project.repo ? <a href={project.repo} className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-primary transition-colors text-foreground">
                    <Github size={16}/>
                    Código
                  </a> : ''}
                  
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
