import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';
import { GetAboutpageResponse, GetHomepageResponse, GetRecruitpageResponse } from '@src/lib/types/admin';
import { resolveBrandingColor } from '@src/lib/utils/brandingColor';
import { resolveReviews } from '@src/lib/utils/review';

const adminClient = axios.create({ baseURL: `${BASE_URL}` });

const getHomepage = async (): Promise<GetHomepageResponse> => {
  const { data } = await adminClient.get('/homepage');
  return {
    ...data,
    brandingColor: resolveBrandingColor(data.brandingColor),
    reviews: resolveReviews(data.reviews),
  };
};
const getAboutpage = async (): Promise<GetAboutpageResponse> => {
  const { data } = await adminClient.get('/homepage/about');
  return { ...data, brandingColor: resolveBrandingColor(data.brandingColor) };
};
const getRecruitpage = async (): Promise<GetRecruitpageResponse> => {
  const { data } = await adminClient.get('/homepage/recruit');
  return { ...data, brandingColor: resolveBrandingColor(data.brandingColor) };
};

export const remoteAdminAPI = {
  getHomepage,
  getAboutpage,
  getRecruitpage,
};
