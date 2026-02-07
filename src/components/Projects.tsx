import { ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"
import { projects } from "@/data/projects"

export const Projects = () => {
  const { t } = useTranslation('projects');
  const translationItems = t('items', { returnObjects: true }) as Record<string, { title: string; description: string }>;
  
  return (
    <section className="mt-20 py-20 max-w-6xl mx-auto" id="projects" data-section-aliases="proyectos">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
          {t('title').split(' ')[0]} <span className="text-primary">{t('title').split(' ')[1]}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {
            projects.map( (project) => {
              const projectData = translationItems[project.id] || { title: project.title, description: project.description };
              return (
              <div key={project.id} className="group p-6 bg-card border border-border rounded-xl hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary w-full md:w-[calc(50%-0.75rem)] flex flex-col">
                <h3 className="">
                  {projectData.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{projectData.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map( (tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/20">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  { project.site ? 
                    <a href={project.site} className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors">
                      <ExternalLink size={16} />
                      {t('site')}
                    </a>
                  : ''}
                  {project.repo ? <a href={project.repo} className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-primary transition-colors text-foreground">
                    <Github size={16}/>
                    {t('code')}
                  </a> : ''}
                  
                  </div>
              </div>
            )})
          }
        </div>
      </div>
    </section>
  )
}
