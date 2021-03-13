import IUser from 'models/IUser';
import ILanguage from 'models/ILanguage';
import { ISetLanguage, ILogOut, ISetUserInfo } from 'models/ISessionActions';
import { sessionTypes } from 'store/types/sessionTypes';
import { setCurrentLanguageInStorage } from 'utils/localization/localization';
import { removeToken } from 'utils/tokenService';

export const setLanguage = (language: ILanguage): ISetLanguage => {
  setCurrentLanguageInStorage(language);

  return {
    type: sessionTypes.SET_LANGUAGE,
    payload: language,
  };
};

export const logOut = (): ILogOut => {
  removeToken();

  return {
    type: sessionTypes.LOGOUT,
    payload: null,
  };
};

export const setUserInfo = (user: IUser): ISetUserInfo => ({
  type: sessionTypes.SET_USER_INFO,
  payload: user,
});
