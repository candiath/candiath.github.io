export const About = () => {
  return (
    <section
      id="about"
      data-section-aliases="sobre-mi,aboutme"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 lg:pb-40"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance section-title">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-up">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Hola, soy Natán. Me gusta construir software que resuelva
              problemas reales y que se sienta prolijo, claro y mantenible.
              Disfruto mucho del proceso, entender qué hace falta, pensar una
              solución simple y llevarla a algo que funcione bien.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Me mueve la curiosidad y el aprendizaje continuo. Siempre estoy
              explorando nuevas ideas, herramientas o formas de hacer mejor las
              cosas. Me siento cómodo adaptándome, preguntando, investigando y
              rompiendo lo que haga falta para entenderlo.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Fuera del código, soy músico desde chico. La música me ayuda a
              mantenerme creativo, a bajar un cambio y a ver las cosas desde
              otro lugar. También me encantan los animales; jugar con
              "Clarita" siempre me recarga las pilas.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Busco proyectos y oportunidades donde pueda aportar valor de
              verdad, trabajar con buena gente y seguir creciendo tanto técnica
              como personalmente.
            </p>
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
