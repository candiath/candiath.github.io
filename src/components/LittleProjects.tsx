import { ExternalLink, Github } from "lucide-react"
import { littleProjects } from "@/data/projects"

export const LittleProjects = () => {
  return (
    <section className="max-w-6xl mx-auto" id="little-projects" data-section-aliases="proyectos, otros-proyectos">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
          Otros <span className="text-primary">Proyectos</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {
            littleProjects.map( (littleProject, index) => (
              <div key={index} className="group p-6 bg-card border border-border rounded-xl hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)]">
                <h3 className="">
                  {littleProject.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{littleProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {littleProject.technologies.map( (tech) => (
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/20">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  { littleProject.site ? 
                    <a href={littleProject.site} className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors">
                      <ExternalLink size={16} />
                      Sitio
                    </a>
                  : ''}
                  {littleProject.repo ? <a href={littleProject.repo} className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-primary transition-colors text-foreground">
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
