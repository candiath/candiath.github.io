import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Flag from 'react-world-flags';

interface LanguageSwitchProps {
  onLanguageChange?: () => void;
}

export const LanguageSwitch = ({ onLanguageChange }: LanguageSwitchProps = {}) => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'es', label: 'Español', countryCode: 'ES' },
    { code: 'en', label: 'English', countryCode: 'US' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setShowDropdown(false);
    onLanguageChange?.();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-card/50"
        aria-label="Cambiar idioma / Switch language"
        aria-expanded={showDropdown}
        aria-haspopup="true"
      >
        <Flag code={currentLanguage.countryCode} style={{ width: 20, height: 15 }} />
        <span>{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown size={16} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
      </button>

      {showDropdown && (
        <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden min-w-40">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors flex items-center gap-3 ${
                i18n.language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
              }`}
            >
              <Flag code={lang.countryCode} style={{ width: 24, height: 18 }} />
              <span className="flex-1">{lang.label}</span>
              {i18n.language === lang.code && (
                <span className="text-primary font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
