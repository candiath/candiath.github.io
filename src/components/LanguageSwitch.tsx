import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-20 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-card border-2 border-primary rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 backdrop-blur-sm"
      aria-label="Cambiar idioma / Switch language"
    >
      <span className="text-2xl">{i18n.language === 'es' ? '🇪🇸' : '🇬🇧'}</span>
      <span className="text-sm font-semibold text-primary">
        {i18n.language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};
