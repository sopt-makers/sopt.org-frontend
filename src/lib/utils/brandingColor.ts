import { colors } from '@sopt-makers/colors';
import { BRAND_COLOR_MODE } from '@src/lib/constants/brandingColor';
import { BrandingColorType, RawBrandingColorType } from '@src/lib/types/admin';

const TEXT_COLOR_MAP = {
  dark: colors.black,
  white: colors.white,
} as const;

export const resolveBrandingColor = (raw: RawBrandingColorType): BrandingColorType => {
  const main = BRAND_COLOR_MODE === 'dark' ? raw.darkModeKeyColor : raw.lightModeKeyColor;
  const textColorKey = BRAND_COLOR_MODE === 'dark' ? raw.darkModeTextColor : raw.lightModeTextColor;

  return { main, textColor: TEXT_COLOR_MAP[textColorKey] };
};
