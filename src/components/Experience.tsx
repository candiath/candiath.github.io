
const experience = [
  {
    period: "junio 2025 - Presente",
    title: "Backend Developer",
    company: "CLINEX",
    description:
      "Actualmente estoy desarrollando un sistema distribuído de gestión clínica con soporte para  múltiples sedes, diseñado para optimizar la administración de pacientes, turnos y profesionales  como ejercicio de arquitectura limpia y buenas prácticas en backend.  Tecnologías: Node.js, Express, Redis, MySQL, JWT, Jest, Clean Architecture, Docker. ",
  },
  {
    period: "marzo 2025 - abril 2025",
    title: "Frontend Developer",
    company: "Kinecandia",
    description:
      "Implementé un landing page para una kinesióloga y fisiatra, facilitando el contacto con  potenciales pacientes y proveyendo una presentación clara de servicios, perfil y testimonios.  Tecnologías: HTML, CSS, JavaScript, Netlify.",
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
export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance">
          Experiencia y <span className="text-primary">Formación</span>
        </h2>

        <div className="grid mb-6 gap-12 md:gap-8 lg:gap-16 md:grid-cols-2">
          {/* TODO: convert to FC */}
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Experiencia</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-accent pl-6 pb-6 last:pb-0 relative"
                >
                  <div className="absolute -left-3 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background">
                  </div>
                    <p className="text-sm text-accent font-semibold mb-1">{exp.period}</p>
                    <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                    <p className="text-primary/80 font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Formación y cursos</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-accent pl-6 pb-6 last:pb-0 relative"
                >
                  <div className="absolute -left-3 -top-1 w-4 h-4 bg-accent rounded-full border-4 border-background">
                  </div>
                    <p className="text-sm text-accent font-semibold mb-1">{edu.year}</p>
                    <h4 className="text-xl font-bold text-foreground mb-1">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm">{edu.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
