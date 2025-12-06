import { ExternalLink } from "lucide-react";
import courses from "@/data/courses";


export const Experience = () => {
  return (
    <>
      <section id="courses" data-section-aliases="cursos,certificados,certificaciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
            Cursos y <span className="text-primary">Certificaciones</span>
          </h2>

          <div className="grid mb-6 gap-12 md:gap-8 lg:gap-16 md:grid-cols-1">
            <div className="flex flex-wrap justify-center gap-6">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href={course.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border-2 border-accent/20 rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 bg-card w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] hover:shadow-primary/50"
                >
                  <p className="text-xs text-accent font-semibold mb-3">
                    {course.year}
                  </p>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {course.organization}
                  </p>
                  <div className="mt-4 text-xs text-accent group-hover:underline flex items-center gap-1">
                    Ver certificado <ExternalLink size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
