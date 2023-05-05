import { Dispatch, SetStateAction } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { ProjectCategoryType } from '@src/lib/types/project';
import { DesktopFilter } from './DesktopFilter';
import { MobileFilter } from './MobileFilter';

interface ProjectFilterPropType {
  selectedCategory: ProjectCategoryType;
  setCategory: Dispatch<SetStateAction<ProjectCategoryType>>;
}

export function ProjectFilter({ selectedCategory, setCategory }: ProjectFilterPropType) {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <>
      {isDesktop && <DesktopFilter selectedCategory={selectedCategory} setCategory={setCategory} />}
      {isTablet && <MobileFilter selectedCategory={selectedCategory} setCategory={setCategory} />}
      {isMobile && <MobileFilter selectedCategory={selectedCategory} setCategory={setCategory} />}
    </>
  );
}
