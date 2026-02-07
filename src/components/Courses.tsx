import { useTranslation } from "react-i18next";
import { courses } from "@/data/courses";
import { CardCertificate } from "./CardCertificate";


export const Experience = () => {
  const { t } = useTranslation('courses');
  const coursesData = t('items', { returnObjects: true }) as any[];
  
  return (
    <>
      <section id="courses" data-section-aliases="cursos,certificados,certificaciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
            {t('title').split(' ')[0]} <span className="text-primary">{t('title').split(' ').slice(1).join(' ')}</span>
          </h2>

          <div className="grid mb-6 gap-12 md:gap-8 lg:gap-16 md:grid-cols-1">
            <div className="flex flex-wrap justify-center gap-6">
              {courses.map((course, index) => {
                const courseData = coursesData[index];
                return (
                <CardCertificate key={index} year={courseData.year} title={courseData.title} url={course.url} image={course.image} />
              )})
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
