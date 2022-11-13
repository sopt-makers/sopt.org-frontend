import { Dispatch, SetStateAction } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DesktopFilter } from './DesktopFilter';
import { MobileFilter } from './MobileFilter';
import { Condition } from '@src/lib';
import { ProjectCategoryType } from '../../lib/constants';

interface ProjectFilterPropType {
  selectedCategory: ProjectCategoryType;
  setCategory: Dispatch<SetStateAction<ProjectCategoryType>>;
}

export function ProjectFilter({ selectedCategory, setCategory }: ProjectFilterPropType) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1920px)',
  });
  const isMobile = !isDesktop;

  return (
    <>
      <Condition statement={isDesktop}>
        <DesktopFilter selectedCategory={selectedCategory} setCategory={setCategory} />
      </Condition>
      <Condition statement={isMobile}>
        <MobileFilter selectedCategory={selectedCategory} setCategory={setCategory} />
      </Condition>
    </>
  );
}
