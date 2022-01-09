import axios, {AxiosError} from 'axios';
import {extractErrMessage} from './utils/axiosError';
import {store} from './store/store';
import {
  getAccessToken,
  getRefreshToken,
  logout,
  setAccessToken,
} from './slices/auth';
// @ts-ignore
import {API_URL} from '@env';

const api = axios.create({
  transformRequest: [
    async (data, headers) => {
      if (store.getState().auth.isLogged && headers) {
        if (headers) {
          headers['Authorization'] = `Bearer ${await getAccessToken()}`;
        }
      }
      return data;
    },
    // @ts-ignore
    ...axios.defaults.transformRequest,
  ],
  baseURL: API_URL,
});

const isJwtExpirationError = (err: AxiosError) => {
  if (err.response && err.response.data) {
    const data = err.response.data;
    return data.statusCode === 401 && data.type === 'ExpiredJwtToken';
  }
  return false;
};

api.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalRequest = err.config;

    // if even after refetch an access token on /refresh route we receive a 401 code then go to login
    if (
      isJwtExpirationError(err) &&
      originalRequest.url === '/api/auth/refresh'
    ) {
      // logout/clear all tokens, it will redirect to authentication page
      store.dispatch(logout());
      return Promise.reject(err);
    } else if (isJwtExpirationError(err) && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getRefreshToken();
      return api
        .post('/api/auth/refresh', {refresh_token: refreshToken})
        .then(res => {
          const newToken = res.data;
          store.dispatch(setAccessToken(newToken));
          api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
          return api(originalRequest);
        });
    }
    if (err.response && err.response.status !== 403) {
      // TODO: add toast
      console.log(extractErrMessage(err));
    }
    return Promise.reject(err);
  },
);

export {api};
