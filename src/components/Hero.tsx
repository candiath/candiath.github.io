import { GetSectionElement } from "../helpers/GetSectionElement.helper";

export const Hero = () => {

  const scrollToSection = (id: string) => {
    console.log("first")
    let element = GetSectionElement(id)
    if ( element ) element.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `/${id}`);
  };



  return (
    <section
      id="hero"
      data-section-aliases="inicio,home"
      className="min-h-screen flex items-center justify-center"
    >
      {/* Contenedor principal - ancho máximo y centrado */}
      <div className="text-center">
        {/* Avatar circular */}
        <div className="w-50 h-50 mx-auto m-8 rounded-full border-2 border-primary/30 flex items-center justify-center fade-in mt-20">
          <span className="text-6xl block w-full h-full">
            <div className="w-full h-full overflow-hidden rounded-full group">
              <img
                src="/profile.jpg"
                alt="Natán Candia"
                className="w-full h-full object-cover scale-120 transform transition-transform duration-500 group-hover:scale-[1.65]"
              />
            </div>
          </span>
        </div>

        <h1 className="text-4xl font-bold">
          <span className="text-foreground">Natán Candia</span>
        </h1>


        {/* Título principal */}
        <h1 className="text-4xl font-bold m-2">
          <span className="text-primary">FullStack Developer</span>
          <br />
          {/* <span className="text-primary">Node.js • Express • React</span> */}
        </h1>

        {/* Descripción */}
        <p className="text-lg mt-4 text-muted-foreground mb-8 max-w-2xl mx-auto">
          Músico, amante de los animales y del aprendizaje continuo. Construyo soluciones backend robustas
          y escalables. Especializado en arquitecturas de microservicios, APIs
          REST y bases de datos SQL.
        </p>

        {/* Botones */}
        <div className="flex gap-4 justify-center ">
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300  hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            Ver Proyectos
          </button>

          <button 
            className="cursor-pointer px-8 py-3 border-2 text-primary border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => {scrollToSection('cv')}}
            >
            <span className="font-semibold text-primary ">Ver CV</span>
          </button>

        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer px-8 py-3 border-2 text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Contacto
          </button>

        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap justify-center gap-4 mt-15">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "JWT",
            "Docker",
            "Git",
            "GitHub",
            "Javascript",
            "TypeScript",
            "Netlify",
            "Render",
            "Vercel",
          ].map((item) => (
            // className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary transition-colors"
            <span
              key={item}
              className="px-4 py-2 border rounded-full hover:border-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
