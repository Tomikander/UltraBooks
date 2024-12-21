import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './components/locales/en.json';
import uk from './components/locales/uk.json';
import ru from './components/locales/ru.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en }, 
      uk: { translation: uk },
      ru: { translation: ru }, 
    },
    lng: 'uk', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;