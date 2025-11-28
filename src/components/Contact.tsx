import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:portfolio@candia.slmail.me",
    color: "hover:text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/encandia/",
    color: "hover:text-primary",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/candiath",
    color: "hover:text-primary",
  },
];
export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
          ¿Hablamos de tu <span className="text-primary">proyecto</span>?
        </h2>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Estoy disponible para proyectos freelance y colaboraciones. No dudes
          en contactarme a través de cualquiera de las siguientes plataformas:
        </p>

        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <a
            href="mailto:contact@example.com"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail size={20} />
            Enviar un correo
          </a>
          <a href="https://www.linkedin.com/in/encandia/" className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
            <Linkedin size={20} />
            Conectemos en LinkedIn
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map( (link) => (
            <a key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full transition-all duration-300 ${link.color} hover:border-primary`}
              >
              <link.icon size={20}/>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};
