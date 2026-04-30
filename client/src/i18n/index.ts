import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';

const resources = {
  es: {
    translation: esCommon
  },
  en: {
    translation: enCommon
  }
};

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
const defaultLanguage = savedLanguage || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const updateDocumentLang = (lng: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
};

updateDocumentLang(defaultLanguage);

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lng);
    updateDocumentLang(lng);
  }
});

export default i18n;
