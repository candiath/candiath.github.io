import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
      title: "CLINEX",
      description:
      "Sistema distribuído de gestión clínica con soporte para  múltiples sedes, diseñado para optimizar la administración de pacientes, turnos y profesionales  como ejercicio de arquitectura limpia y buenas prácticas en backend. ",
      technologies: ["Node.js", "Express", "Redis", "MySQL", "JWT", "Jest", "Clean Architecture", "Docker"],
      repo: "https://github.com/candiath/clinex",
    },
    {
      title: "Landing Page Kinecandia",
      description:
      "Landing page para una kinesióloga y fisiatra, que facilita el contacto con  potenciales pacientes y provee una presentación clara de servicios, perfil y testimonios.",
      technologies: ["Javascript", "CSS", "HTML", "Netlify"],
      site: "https://kinecandia.netlify.app/",
      repo: "https://github.com/candiath/kine-landing",
    
    },
  ]
export const Projects = () => {
  return (
    <section className="mt-20 py-20 max-w-6xl mx-auto" id="projects" data-section-aliases="proyectos">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                  { project.site ? 
                    <a href={project.site} className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors">
                      <ExternalLink size={16} />
                      Sitio
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
