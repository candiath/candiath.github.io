import { ExternalLink, FileX2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CardCertificateProps {
  year: string;
  title: string;
  url: string;
  image?: string;
}
export const CardCertificate = ({
  year,
  title,
  url,
  image,
}: CardCertificateProps) => {
  const { t } = useTranslation('common');
  
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-6 border-2 border-accent/20 rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 bg-card w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] hover:shadow-primary/50"
      >
        <p className="text-xs text-accent font-semibold mb-3">{year}</p>
        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors h-12">
          {title}
        </h4>
        <div className="mb:h-90 h-90 flex items-center justify-center rounded-lg ">
          {image ? (
            <img
              src={image}
              className="max-h-full w-auto object-contain hover:shadow-lg shadow-white/20"
              alt={`Certificado de ${title}`}
            />
          ) : (
              <div className="text-center p-6 space-y-4">
                <div className="text-muted-foreground">
                  <FileX2 size={40} className="mx-auto mb-3 opacity-50" />
                  <p className="text-lg">{t('noPreview')}</p>
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 hover:underline transition-colors group"
                >
                  {t('viewExternal')}
                  <ExternalLink
                    size={14}
                    className=""
                  />
                </a>
            </div>  
          )}
        </div>
      </a>
    </>
  );
};
