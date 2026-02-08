import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeSwitch = () => {
  const { t } = useTranslation('common');
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-card/50"
      aria-label={`${t('theme')}: ${theme === 'dark' ? t('dark') : t('light')}`}
      title={`${t('theme')}: ${theme === 'dark' ? t('dark') : t('light')}`}
    >
      {theme === 'dark' ? (
        <Moon size={20} className="transition-transform hover:rotate-30 duration-500" />
      ) : (
        <Sun size={20} className="transition-transform hover:rotate-90 duration-800" />
      )}
      <span className="hidden sm:inline">{theme === 'dark' ? t('dark') : t('light')}</span>
    </button>
  );
};
