import produce from 'immer';

import ILanguage from 'models/redux/ILanguage';
import IUser from 'models/redux/IUser';
import ISessionState, { ISession } from 'models/redux/ISessionState';
import { sessionTypes, TActions } from 'store/types/sessionTypes';

const INITIAL_STATE: ISession = {
  user: null,
  language: null,
  currentRoute: null,
};

const session = (state: ISession = INITIAL_STATE, action: TActions) => {
  const { type, payload } = action;

  switch (type) {
    case sessionTypes.SET_LANGUAGE:
      return produce(state, draft => {
        draft.language = payload as ILanguage;
      });
    case sessionTypes.LOGOUT:
      return produce(state, draft => {
        draft.user = null;
      });
    case sessionTypes.SET_USER_INFO:
      return produce(state, draft => {
        draft.user = payload as IUser;
      });
    default:
      return state;
  }
};

export const getLanguage = (state: ISessionState) => state.session.language;
export const getUser = (state: ISessionState) => state.session.user;

export default session;
