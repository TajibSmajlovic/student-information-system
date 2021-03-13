import { ISetUserInfo, ILogOut, ISetLanguage } from 'models/ISessionActions';

export enum sessionTypes {
  SET_LANGUAGE = 'session/SET_LANGUAGE',
  LOGOUT = 'session/LOGOUT',
  SET_USER_INFO = 'session/SET_USER_INFO',
}

export type TActions = ISetUserInfo | ILogOut | ISetLanguage;
