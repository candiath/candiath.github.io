import { miniApps } from "@/data/projects"
import { MiniProjectCard } from "./MiniProjectCard"


export const MiniApps = () => {
  return (
    <section
      className="max-w-6xl mx-auto pt-20"
      id="mini-apps"
      data-section-aliases="apps, mini-apps"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
          Mini <span className="text-primary">Apps</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {miniApps.map((miniProject, index) => (
            <MiniProjectCard
              key={index}
              index={index}
              title={miniProject.title}
              description={miniProject.description}
              technologies={miniProject.technologies}
              site={miniProject.site}
              repo={miniProject.repo}
              image={miniProject.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
