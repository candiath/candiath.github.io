export const Hero = () => {
  const enableStyles = false;
  return (
    <section
      id="hero"
      className={ enableStyles ? "min-h-screen flex items-center justify-center px-4" : "" }
    >
      {/* Contenedor principal - ancho máximo y centrado */}
      <div className={ enableStyles ? "max-w-4xl text-center" : "" }>
        
        {/* Avatar circular */}
        <div className={ enableStyles ? "w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center" : "" }>
          <span className="text-4xl">👨‍💻</span>
        </div>

        {/* Título principal */}
        <h1 className={ enableStyles ? "text-5xl font-bold mb-6" : "" }>
          <span>Backend Developer</span>
          <br />
          <span className={ enableStyles ? "bg-gradient-to-r from-primary to-accent bg-clip-text" : "" }>
            Node.js • Express • SQL
          </span>
        </h1>

        {/* Descripción */}
        <p className={ enableStyles ? "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" : "" }>
          Construyo soluciones backend robustas y escalables. Especializado en
          arquitecturas de microservicios, APIs REST y bases de datos SQL.
        </p>

        {/* Botones */}
        <div className={ enableStyles ? "flex flex-col sm:flex-row gap-4 justify-center mb-16" : "" }>
          <button className={ enableStyles ? "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent" : "" }>
            Ver Proyectos
          </button>
          <button className={ enableStyles ? "px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10" : "" }>
            Contacto
          </button>
        </div>

        {/* Tecnologías */}
        <div className={ enableStyles ? "flex flex-wrap justify-center gap-4" : "" }>
          {["Node.js", "Express", "SQL", "Docker", "MongoDB", "PostgreSQL"].map((item) => (
            <span
              key={item}
              className={ enableStyles ? "px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary" : "" }
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
