const experience = [
  {
    period: "junio 2025 - Presente",
    title: "Portal CLINEX",
    company: "CLINEX",
    description:
      "Sitio web y panel de administración para un sistema de gestión clínica distribuida con soporte para múltiples sedes. Permite gestionar pacientes, turnos y profesionales, visualizar métricas y reportes, y administrar permisos y configuraciones desde una interfaz segura, escalable y optimizada para flujo de trabajo clínico.",
  },
  {
    period: "marzo 2025 - abril 2025",
    title: "Landing Page Kinecandia",
    company: "Kinecandia",
    description:
      "Landing page enfocada en conversión para una kinesióloga y fisiatra: presenta servicios, perfil profesional y testimonios, incluye formulario de contacto y llamadas a la acción, y está diseñada responsive y optimizada para velocidad.",
  },
];

const education = [
  {
    year: "2021-2022",
    title: "Ingeniería en Informática",
    organization: "Universidad Gastón Dachary",
  },
  {
    year: "2016-2020",
    title: "Lic. en Sistemas de Información",
    organization: "UNAM - Facultad de Ciencias Exactas, Químicas y Naturales",
  },
  {
    year: "2010-2015",
    title: "Maestro Mayor de Obras",
    organization: "EPET N° 13",
  },
];

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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance">
          Experiencia y <span className="text-primary">Formación</span>
        </h2>

        <div className="grid mb-6 gap-12 md:gap-8 lg:gap-16 md:grid-cols-3">
          {/* TODO: convert to FC */}

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Formación académica
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-accent pl-6 pb-6 last:pb-0 relative"
                >
                  <div className="absolute -left-3 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <p className="text-sm text-accent font-semibold mb-1">
                    {edu.year}
                  </p>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {edu.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>

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

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Experiencia
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-accent pl-6 pb-6 last:pb-0 relative"
                >
                  <div className="absolute -left-3 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <p className="text-sm text-accent font-semibold mb-1">
                    {exp.period}
                  </p>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-primary/80 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
