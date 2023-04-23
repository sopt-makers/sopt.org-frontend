const BASE_DEV_URL = 'https://api-dev.sopt.org';
const BASE_PROD_URL = 'https://api.sopt.org';

export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_DEV_URL : BASE_PROD_URL;

export const DEFAULT_TIMEOUT = 3000;
