import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import { getDefaultLanguage } from './localization';

const lang = getDefaultLanguage();

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: lang.LANGUAGE_CODE,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
    // maybe to add debug: true
  });

export default i18n;
