import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';
import { handleApiResponse } from './interceptor';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(handleApiResponse);
