import IUser from './IUser';
import ILanguage from './ILanguage';
import { IConfigurableRoute } from 'utils/routes/IRoutes';

export interface ISession {
  user: IUser | null;
  language: ILanguage | null;
  currentRoute: IConfigurableRoute | null;
}

export default interface ISessionState {
  session: ISession;
}
