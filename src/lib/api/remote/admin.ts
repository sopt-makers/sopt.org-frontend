import { BASE_URL } from '@src/lib/constants/client';
import {
  BrandingColorType,
  GetAboutpageResponse,
  GetHomepageResponse,
  GetRecruitpageResponse,
  RawBrandingColorType,
} from '@src/lib/types/admin';
import { resolveBrandingColor } from '@src/lib/utils/brandingColor';
import { resolveReviews } from '@src/lib/utils/review';
import axios from 'axios';

const adminClient = axios.create({ baseURL: `${BASE_URL}` });

const getBrandingColor = async (): Promise<BrandingColorType> => {
  const { data } = await adminClient.get<RawBrandingColorType>('/homepage/branding-color');
  return resolveBrandingColor(data);
};

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
  getBrandingColor,
  getHomepage,
  getAboutpage,
  getRecruitpage,
};
