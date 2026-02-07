import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation('about');
  
  return (
    <section
      id="about"
      data-section-aliases="sobre-mi,aboutme"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 lg:pb-40"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
          {t('title').split(' ')[0]} <span className="text-primary">{t('title').split(' ')[1]}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-up">
            {(t('paragraphs', { returnObjects: true }) as string[]).map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-center slide-up">
            <div className="">
              <img
                src="https://avatars.githubusercontent.com/u/55251304?v=4"
                alt="About me"
                className="rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
