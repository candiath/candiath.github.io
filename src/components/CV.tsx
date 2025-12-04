import { Download, FileText } from "lucide-react";
import { CV_HASH } from "../generated/cv-hash";

export const CV = () => {
  return (
    <section id="cv" data-section-aliases="curriculum,resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance section-title">
          Curriculum <span className="text-primary">Vitae</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Descarga un resumen profesional en formato PDF
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`/cv-portfolio.pdf?v=${CV_HASH}`}
            download="CV-Natan-Candia.pdf"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-3 cursor-pointer min-w-64"
          >
            <Download size={22} className="group-hover:animate-bounce" />
            Descargar CV
          </a>

          <a
            href={`/cv-portfolio.pdf?v=${CV_HASH}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer min-w-64 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            <FileText size={22} />
            Ver en el navegador
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-card border border-border rounded-lg p-6 max-w-md">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Última actualización:</span>{" "}
              Noviembre 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
