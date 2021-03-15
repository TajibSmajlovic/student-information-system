import IAction from './IAction';
import IUser from './IUser';
import ILanguage from './ILanguage';
import { sessionTypes } from 'store/types/sessionTypes';

export interface ISetUserInfo extends IAction<sessionTypes.SET_USER_INFO, IUser> {}
export interface ILogOut extends IAction<sessionTypes.LOGOUT, null> {}
export interface ISetLanguage extends IAction<sessionTypes.SET_LANGUAGE, ILanguage> {}
