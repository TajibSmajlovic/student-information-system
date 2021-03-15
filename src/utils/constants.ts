export const TOKEN_KEY = 'AUTH-TOKEN';
export const LANG_KEY = 'CURRENT_LANGUAGE';
export const NOTIFICATION_DISMISS_TIMEOUT = 5000;

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
  NAVIGATION: 'navigation',
  USERS_MANAGEMENT: 'users_management',
};
