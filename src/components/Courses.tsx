const courses = [
  {
    year: "2025",
    title: "React: de cero a experto - Edición 2025",
    organization: "DevTalles",
    certificate: "https://cursos.devtalles.com/certificates/o2rkihjv34",
  },
  {
    year: "2024",
    title: "JavaScript Moderno: Guía para dominar el lenguaje",
    organization: "DevTalles",
    certificate: "https://cursos.devtalles.com/certificates/1zzlixb5yx",
  },
  {
    year: "2024",
    title: "NodeJS: De cero a experto",
    organization: "Udemy",
    certificate:
      "https://www.udemy.com/certificate/UC-9be3b002-1f98-42be-801e-34480cac5b04/",
  },
  {
    year: "2024",
    title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
    organization: "DevTalles",
    certificate: "https://cursos.devtalles.com/certificates/9cdssbyj8y",
  },
  {
    year: "2024",
    title: "Visual Studio Code: Mejora tu velocidad para codificar",
    organization: "DevTalles",
    certificate: "https://cursos.devtalles.com/certificates/pmxdxglzd0",
  },
];

export const Experience = () => {
  return (
    <>
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance">
            Cursos y <span className="text-primary">Certificaciones</span>
          </h2>

          <div className="grid mb-6 gap-12 md:gap-8 lg:gap-16 md:grid-cols-1">
            {/* TODO: convert to FC */}


            {/* Courses */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Cursos</h3>
              <div className="space-y-6">
                {courses.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-accent pl-6 pb-6 last:pb-0 relative"
                  >
                    <div className="absolute -left-3 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                    <p className="text-sm text-accent font-semibold mb-1">
                      {edu.year}
                    </p>
                    <a
                      href={edu.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-foreground mb-1 hover:underline"
                    >
                      {edu.title}
                    </a>
                    <p className="text-muted-foreground text-sm">
                      {edu.organization}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
