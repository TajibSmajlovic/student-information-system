import i18n from 'i18next';
import { useEffect, useMemo, useState, useContext, useCallback, createContext, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ILanguage from 'models/redux/ILanguage';
import { setLanguage } from 'store/actions';
import { getLanguage, getUser } from 'store/reducers/sessionReducer';
import { loggedIn } from 'utils/tokenService';
import { getDefaultLanguage, getCurrentLanguageFromStorage } from 'utils/localization/localization';

export interface IUserContext {
  children: ReactNode;
}

const UserContext = createContext<Partial<IUserContext>>({});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const user = useSelector(getUser);

  const setupUser = useCallback(() => {
    const isLoggedIn = loggedIn();
    if (isLoggedIn) {
      // load user);
    } else {
      setIsInitialized(true);
    }
  }, []);

  const initialize = useCallback(async () => {
    // load localization
    let initLanguage: ILanguage = getCurrentLanguageFromStorage() || getDefaultLanguage();

    i18n.changeLanguage(initLanguage.LANGUAGE_CODE);
    dispatch(setLanguage(initLanguage));

    //init user related stuff
    setupUser();
  }, [dispatch, setupUser]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (language) i18n.changeLanguage(language.LANGUAGE_CODE);
  }, [language]);

  useEffect(() => {
    if (user) setIsInitialized(true);
  }, [user]);

  const context = useMemo(() => ({}), []);

  if (!isInitialized) return <div>{/* TODO: put appropriate loader here */}</div>;

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error(`useUser must be used within a UserProvider`);

  return context;
}

export const Consumer = UserContext.Consumer;
