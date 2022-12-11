import config from 'config';
import humps from 'humps';
import axios from 'axios';
import { getCached } from 'utils';

const axiosApi = axios.create({
  baseURL: config.API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  transformRequest: [
    (data) => {
      if (!(data instanceof FormData)) {
        // convert all body keys to snake_case
        data = humps.decamelizeKeys(data);

        // convert all body objects to strings
        if (typeof data === 'object') {
          data = JSON.stringify(data);
        }
      }

      return data;
    },
  ],
  transformResponse: [
    (data) =>
      // convert all body keys to snake_case
      data && humps.camelizeKeys(JSON.parse(data)),
  ],
});

axiosApi.interceptors.request.use(
  (config) => {
    // Get accessToken
    const accessToken = getCached().accessToken;

    // Set accessToken if authenticated
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error?.response?.status === 401) {
      delete axios.defaults.headers.common['Authorization'];
      window.location.assign(config.API_BASE);
    }

    return Promise.reject(error);
  },
);

export default axiosApi;
