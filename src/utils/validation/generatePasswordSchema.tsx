import { object, string } from 'yup';

export const GENERATE_PASSWORD_SCHEMA = object().shape({
  email: string()
    .required('login:required_email')
    .email('login:invalid_email'),
});
