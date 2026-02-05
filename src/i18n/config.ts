import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// español
import esNavigation from './locales/es/navigation.json';
import esHero from './locales/es/hero.json';
import esProjects from './locales/es/projects.json';
import esMiniApps from './locales/es/miniApps.json';
import esExperience from './locales/es/experience.json';
import esCourses from './locales/es/courses.json';
import esCv from './locales/es/cv.json';
import esContact from './locales/es/contact.json';
import esAbout from './locales/es/about.json';
import esFooter from './locales/es/footer.json';
import esCommon from './locales/es/common.json';

// inglés
import enNavigation from './locales/en/navigation.json';
import enHero from './locales/en/hero.json';
import enProjects from './locales/en/projects.json';
import enMiniApps from './locales/en/miniApps.json';
import enExperience from './locales/en/experience.json';
import enCourses from './locales/en/courses.json';
import enCv from './locales/en/cv.json';
import enContact from './locales/en/contact.json';
import enAbout from './locales/en/about.json';
import enFooter from './locales/en/footer.json';
import enCommon from './locales/en/common.json';

const resources = {
  es: {
    navigation: esNavigation,
    hero: esHero,
    projects: esProjects,
    miniApps: esMiniApps,
    experience: esExperience,
    courses: esCourses,
    cv: esCv,
    contact: esContact,
    about: esAbout,
    footer: esFooter,
    common: esCommon,
  },
  en: {
    navigation: enNavigation,
    hero: enHero,
    projects: enProjects,
    miniApps: enMiniApps,
    experience: enExperience,
    courses: enCourses,
    cv: enCv,
    contact: enContact,
    about: enAbout,
    footer: enFooter,
    common: enCommon,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['es', 'en'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
