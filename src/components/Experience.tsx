import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { experience } from "@/data/experience";


export const Experience = () => {
  const { t } = useTranslation('experience');
  const experienceData = t('experience', { returnObjects: true }) as any[];
  const educationData = t('education', { returnObjects: true }) as any[];
  
  return (
    <section id="experience" data-section-aliases="experiencia,experiencia-y-formacion,formacion,formación" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
          {t('title').split(' ').slice(0, -1).join(' ')} <span className="text-primary">{t('title').split(' ').slice(-1)[0]}</span>
        </h2>

        <div className="grid mb-6 gap-12 md:gap-8 lg:gap-16 md:grid-cols-2">
          {/* TODO: convert to FC */}

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              {t('experienceTitle')}
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => {
                const expData = experienceData[index];
                return (
                <div
                  key={index}
                  className="border-l-2 border-accent pl-6 pb-6 last:pb-0 relative"
                >
                  <div className="absolute -left-3 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <p className="text-sm text-accent font-semibold mb-1">
                    {expData.period}
                  </p>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {
                      exp.url ? (
                        <a
                          href={exp.url}
                          className="hover:underline flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <>
                            {expData.title}
                            <ExternalLink size={18} />
                          </>
                        </a>
                      ) : (
                        expData.title
                      )
                    }
                  </h4>
                  <p className="text-primary/80 font-medium mb-2">
                    {expData.company}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {expData.description}
                  </p>
                </div>
              )})
              }
            </div>
          </div>

          {/* Education */}
          <div className="sm:ml-10">
            <h3 className="text-2xl font-bold text-primary mb-8">
              {t('educationTitle')}
            </h3>
            <div className="space-y-6">
              {educationData.map((_, index) => {
                const eduData = educationData[index];
                return (
                <div
                // I'm aware of this index usage, but this is static data that won't dynamically change. 
                  key={index}
                  className="border-l-2 border-accent pl-6 pb-6 last:pb-0 relative"
                >
                  <div className="absolute -left-3 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <p className="text-sm text-accent font-semibold mb-1">
                    {eduData.year}
                  </p>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {eduData.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {eduData.organization}
                  </p>
                </div>
              )})
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
