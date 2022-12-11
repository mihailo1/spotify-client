const env = {
  // general
  NAME: process.env.REACT_APP_NAME || '',
  VERSION: process.env.REACT_APP_VERSION || '',
  ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || '',

  // api
  API_BASE: process.env.REACT_APP_API_BASE || '',
  API_CLIENT_URL: process.env.REACT_APP_API_CLIENT_URL || '',
  API_SERVER_URL: process.env.REACT_APP_API_SERVER_URL || '',

  // generic
  PORT: process.env.REACT_APP_PORT || 3000,
  ENABLE_DEV_TOOLS: process.env.REACT_APP_ENABLE_DEV_TOOLS || true,
  LOCAL_STORAGE_ID: process.env.REACT_APP_LOCAL_STORAGE_ID || '',
  DEFAULT_CURRENCY: process.env.REACT_APP_DEFAULT_CURRENCY || 'EUR',
  DEFAULT_LOCALE: process.env.REACT_APP_DEFAULT_LOCALE || 'en',
  DEFAULT_LOCALE_DATE: process.env.REACT_APP_DEFAULT_LOCALE_DATE || 'nl',
};

export default env;
