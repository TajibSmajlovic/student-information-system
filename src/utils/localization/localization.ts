import ILanguage from 'models/redux/ILanguage';
import { LANGUAGES, LANG_KEY } from 'utils/constants';

export const getDefaultLanguage = () => {
  const lang = LANGUAGES.find(l => l.DEFAULT);
  return lang || LANGUAGES[0];
};

export const setCurrentLanguageInStorage = (language: ILanguage) => {
  localStorage.setItem(LANG_KEY, JSON.stringify(language));
};

export function getCurrentLanguageFromStorage() {
  try {
    const lang = localStorage.getItem(LANG_KEY);

    return lang ? JSON.parse(lang) : null;
  } catch (err) {
    return null;
  }
}
