import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "@/data/socialLinks";
import { publicEmail } from "@/data/contactData";

export const Contact = () => {
  const { t } = useTranslation('contact');
  
  return (
    <section id="contact" data-section-aliases="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance section-title">
          {t('title').split(' ').slice(0, -1).join(' ')} <span className="text-primary">{t('title').split(' ').slice(-1)[0]}</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4">
          <a
            href={`mailto:${publicEmail}`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail size={20} />
            {t('sendEmail')}
          </a>
          <a href="https://www.linkedin.com/in/encandia/" className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-105">
            <Linkedin size={20} />
            {t('connectLinkedIn')}
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map( (link) => (
            <a key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full transition-all duration-300 ${link.color} hover:border-primary hover:shadow-lg hover:shadow-primary/50`}
              >
              <link.icon size={20}/>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};
