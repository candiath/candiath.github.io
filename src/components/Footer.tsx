import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation('footer');
  
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {t('copyright')}</p>
          <p className="">{t('createdBy')} <span className="text-accent icon-easter-egg cursor-pointer inline-block w-2.5"></span> {t('by')} {" "}
            <span className="text-foreground font-semibold">{t('authorName')}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
