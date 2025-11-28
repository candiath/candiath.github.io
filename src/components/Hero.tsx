export const Hero = () => {

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
    >
      {/* Contenedor principal - ancho máximo y centrado */}
      <div className="text-center">


        {/* Avatar circular */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-primary/30 flex items-center justify-center fade-in">
          <span className="text-6xl">👨‍💻</span>
        </div>


        {/* Título principal */}
        <h1 className="text-4xl font-bold">
          <span className="text-foreground">Backend Developer</span>
          <br />
          <span className="text-primary">
            Node.js • Express • SQL
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-lg mt-4 text-muted-foreground mb-8 max-w-2xl mx-auto">
          Construyo soluciones backend robustas y escalables. Especializado en
          arquitecturas de microservicios, APIs REST y bases de datos SQL.
        </p>

        {/* Botones */}
        <div className="flex gap-4 justify-center ">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300  hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
            Ver Proyectos
          </button>
          <button className="px-8 py-3 border-2 text-primary border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg ">
            Contacto
          </button>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap justify-center gap-4 mt-15">
          {["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Git", "GitHub", "Javascript", "TypeScript", "Netlify", "Render", "Vercel"].map((item) => (
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
