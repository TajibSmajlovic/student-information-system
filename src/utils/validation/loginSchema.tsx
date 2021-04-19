import { object, string } from 'yup';

export const LOGIN_SCHEMA = object().shape({
  email: string()
    .required('login:required_email')
    .email('login:invalid_email'),
  password: string().required('login:required_password'),
});
