import { Dispatch, SetStateAction } from 'react';
import { useIsDesktop } from '@src/hooks/useIsDesktop';
import { DesktopFilter } from './DesktopFilter';
import { MobileFilter } from './MobileFilter';
import { ProjectCategoryType } from '../../lib/constants';

interface ProjectFilterPropType {
  selectedCategory: ProjectCategoryType;
  setCategory: Dispatch<SetStateAction<ProjectCategoryType>>;
}

export function ProjectFilter({ selectedCategory, setCategory }: ProjectFilterPropType) {
  const isDesktop = useIsDesktop('1920px');
  const isMobile = !isDesktop;

  return (
    <>
      {isDesktop && <DesktopFilter selectedCategory={selectedCategory} setCategory={setCategory} />}
      {isMobile && <MobileFilter selectedCategory={selectedCategory} setCategory={setCategory} />}
    </>
  );
}
