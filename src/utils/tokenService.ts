import decode from 'jwt-decode';

import IToken from 'models/redux/IToken';
import { TOKEN_KEY } from 'utils/constants';

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const getToken = (key = TOKEN_KEY) => {
  const token = localStorage.getItem(key);

  return token ? JSON.parse(token) : null;
};

export const getTokenData = () => {
  const token = getToken();

  return decode(token.idToken);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isTokenExpired = (token: string) => {
  try {
    const decoded: IToken = decode(token);
    const validToken = decoded.exp < Date.now() / 1000;

    return validToken;
  } catch (err) {
    console.error('Token validation error', err.response);
    return true;
  }
};

export const loggedIn = () => {
  const token = getToken();

  return !!token && !isTokenExpired(token.idToken);
};
