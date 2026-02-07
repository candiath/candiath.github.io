import { useTranslation } from "react-i18next"
import { miniApps } from "@/data/projects"
import { MiniProjectCard } from "./MiniProjectCard"


export const MiniApps = () => {
  const { t } = useTranslation('miniApps');
  const translationItems = t('items', { returnObjects: true }) as Record<string, { title: string; description: string }>;
  
  return (
    <section
      className="max-w-6xl mx-auto pt-20"
      id="mini-apps"
      data-section-aliases="apps, mini-apps"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
          {t('title').split(' ')[0]} <span className="text-primary">{t('title').split(' ')[1]}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {miniApps.map((miniProject) => {
            const miniAppData = translationItems[miniProject.id] || { title: miniProject.title, description: miniProject.description };
            return (
            <MiniProjectCard
              key={miniProject.id}
              title={miniAppData.title}
              description={miniAppData.description}
              technologies={miniProject.technologies}
              site={miniProject.site}
              repo={miniProject.repo}
              image={miniProject.image}
            />
          )})
          }
        </div>
      </div>
    </section>
  );
}
