export const TOKEN_KEY = 'AUTH-TOKEN';
export const LANG_KEY = 'CURRENT_LANGUAGE';
export const NOTIFICATION_DISMISS_TIMEOUT = 5000;
export const DEBOUNCE_TIMEOUT = 500;
export const DEFAULT_PAGE_SIZE = 10;
export const LANGUAGES = [
  {
    id: 1,
    name: 'ENG',
    value: 'English',
    LANGUAGE_CODE: 'en',
    LCID: 'en-us',
    DEFAULT: true,
    ICON_PATH: `${process.env.PUBLIC_URL}/assets/icons/uk.svg`,
  },
  {
    id: 2,
    name: 'BiH',
    value: 'Bosnian',
    LANGUAGE_CODE: 'bs',
    LCID: 'bs',
    ICON_PATH: `${process.env.PUBLIC_URL}/assets/icons/bh.svg`,
  },
];

export const LOCALIZATION_PAGES = {
  COMMON: 'common',
  LOGIN: 'login',
  NAVIGATION: 'navigation',
  USERS_MANAGEMENT: 'users_management',
  COURSES_MANAGEMENT: 'courses_management',
  PROFESSORS_MANAGEMENT: 'professors_management',
  STUDENTS_MANAGEMENT: 'students_management',
};
