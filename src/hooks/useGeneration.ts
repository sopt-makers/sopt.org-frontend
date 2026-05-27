import { useHomepage } from '@src/views/MainPage/hooks/useHomepage';

/** 현재 SOPT 기수만 가져옴 */
export const useGeneration = (): number | null => {
  const { data } = useHomepage();

  return data?.generation ?? null;
};
