import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';

const adminClient = axios.create({ baseURL: `${BASE_URL}v2` });

const getHomepage = async () => {
  const { data } = await adminClient.get('/homepage');
  return data;
};
const getAboutpage = async () => {
  const { data } = await adminClient.get('/homepage/about');
  return data;
};
const getRecruitpage = async () => {
  const { data } = await adminClient.get('/homepage/recruit');
  return data;
};

export const remoteAdminAPI = {
  getHomepage,
  getAboutpage,
  getRecruitpage,
};
