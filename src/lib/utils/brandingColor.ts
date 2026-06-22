import { BRAND_COLOR_MODE } from '@src/lib/constants/brandingColor';
import { BrandingColorType, RawBrandingColorType } from '@src/lib/types/admin';

export const resolveBrandingColor = (raw: RawBrandingColorType): BrandingColorType => {
  const main = BRAND_COLOR_MODE === 'dark' ? raw.darkModeKeyColor : raw.lightModeKeyColor;

  return { main };
};
