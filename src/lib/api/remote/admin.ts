import { api } from '@src/lib/api/instance';
import {
  BrandingColorType,
  GetAboutpageResponse,
  GetHomepageResponse,
  GetRecruitpageResponse,
  RawBrandingColorType,
} from '@src/lib/types/admin';
import { resolveBrandingColor } from '@src/lib/utils/brandingColor';

const getBrandingColor = async (): Promise<BrandingColorType> => {
  const { data } = await api.get<RawBrandingColorType>('/homepage/branding-color');
  return resolveBrandingColor(data);
};

const getHomepage = async (): Promise<GetHomepageResponse> => {
  const { data } = await api.get('/homepage');
  return {
    ...data,
    brandingColor: resolveBrandingColor(data.brandingColor),
  };
};
const getAboutpage = async (): Promise<GetAboutpageResponse> => {
  const { data } = await api.get('/homepage/about');
  return { ...data, brandingColor: resolveBrandingColor(data.brandingColor) };
};
const getRecruitpage = async (): Promise<GetRecruitpageResponse> => {
  const { data } = await api.get('/homepage/recruit');
  return { ...data, brandingColor: resolveBrandingColor(data.brandingColor) };
};

export const remoteAdminAPI = {
  getBrandingColor,
  getHomepage,
  getAboutpage,
  getRecruitpage,
};
