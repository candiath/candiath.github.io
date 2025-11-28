
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-up">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Desarrollador backend especializado en Node.js y Express, enfocado en construir APIs REST seguras, escalables y bien documentadas. Experiencia con bases de datos relacionales (PostgreSQL/MySQL) y NoSQL (MongoDB), optimizando modelos, índices y rendimiento. Aplico buenas prácticas de desarrollo: validación, manejo de errores, autenticación/autorización, testing, logging y observabilidad. Me caracteriza el aprendizaje continuo, la adaptación y la resolución de problemas. Busco aportar en proyectos desafiantes con soluciones robustas que generen impacto.
            </p>

            <p className="text-lg text-foreground mb-6leading-relaxed">
              Fuera del código, soy músico y disfruto mucho de la creatividad a través de la música. También me apasionan los animales y pasar tiempo con ellos.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Siempre estoy abierto a nuevas oportunidades y colaboraciones que me permitan aportar valor y crecer profesionalmente.
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
  )
}
