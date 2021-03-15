import { USER_ROLES } from 'utils/enums';

export default interface IUser {
  id: number;
  name: string;
  email: string;
  role: USER_ROLES;
}
