import { object, string } from 'yup';

export const RESET_PASSWORD_SCHEMA = object().shape({
  email: string()
    .required('login:required_email')
    .email('login:invalid_email'),
});
