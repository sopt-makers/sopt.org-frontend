import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';

const adminClient = axios.create({ baseURL: `${BASE_URL}` });

const getHomepage = async () => {
  const { data } = await adminClient.get('/homepage/v2');
  return data;
};
const getAboutpage = async () => {
  const { data } = await adminClient.get('/homepage/v2/about');
  return data;
};
const getRecruitpage = async () => {
  const { data } = await adminClient.get('/homepage/v2/recruit');
  return data;
};

export const remoteAdminAPI = {
  getHomepage,
  getAboutpage,
  getRecruitpage,
};
