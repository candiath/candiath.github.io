import { ExternalLink, Github } from "lucide-react";

interface MiniProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  site?: string;
  repo?: string;
  image?: string;
}

export const MiniProjectCard = ({
  title,
  description,
  technologies,
  site,
  repo,
  // image = "https://placehold.co/600x400",
  image,
}: MiniProjectCardProps) => {
  return (
    <div
      className="flex flex-col md:flex-row md:min-w-6xl group p-6 bg-card border border-border rounded-xl hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] hover:scale-110"
      
    >
      <div className="flex flex-col flex-1">
        <h3 className="">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* mobile */}
        <div className="mb-4 md:hidden">
          {(!image) ? (
            <p className="bg-gray-800 p-20 rounded-lg text-center">
              Sorry, no image available
            </p>
          ) : (
          <a href={site} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-lg w-full max-h-60  md:min-w-100 object-cover object-top transition-all duration-500 "
            src={image}
            alt={`Captura de ${title}`}
          />
          </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/20">
              {tech}
            </span>
          ))}
        </div>

        <div id="buttons" className="flex gap-3 mt-auto">
          {site ? (
            <a
              href={site}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
            >
              <ExternalLink size={16} />
              Sitio
            </a>
          ) : (
            ""
          )}
          {repo ? (
            <a
              href={repo}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-primary transition-colors text-foreground"
            >
              <Github size={16} />
              Código
            </a>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="hidden md:block ml-6 self-center min-w-80">
        {(!image) ? (
          <p className="bg-gray-800 p-20 rounded-lg text-center">
            Sorry, no image available
          </p>
        ) : (
          <a href={site} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-lg w-full max-h-60  md:w-100 object-cover object-top hover:scale-130 transition-all duration-500 hover:shadow-2xl border-primary/0 hover:border-primary hover:border hover:shadow-primary"
            src={image}
            alt={`Captura de ${title}`}
          />
          </a>
        )}
      </div>
    </div>
  );
};
