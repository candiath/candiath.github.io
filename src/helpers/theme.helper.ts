type Theme = 'dark' | 'light';

/**
 * Gets the initial theme from localStorage or system preferences
 * @returns The initial theme ('dark' or 'light')
 */
export const getInitialTheme = (): Theme => {
  let savedTheme: string | null = null;
  
  try {
    savedTheme = localStorage.getItem('theme');
  } catch {
    // localStorage may not be available asdasd
  }

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

/**
 * Applies the theme class to the document element
 * @param theme - The theme to apply ('dark' or 'light')
 */
export const applyThemeClass = (theme: Theme): void => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
};
