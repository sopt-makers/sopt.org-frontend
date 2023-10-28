import { projectCategoryDescription } from '@src/lib/constants/project';
import { ProjectCategoryType } from '@src/lib/types/project';
import * as S from './style';

export interface ProjectCategoryDescriptionProps {
  selectedCategory: ProjectCategoryType;
}

export default function ProjectCategoryDescription({
  selectedCategory,
}: ProjectCategoryDescriptionProps) {
  if (selectedCategory === ProjectCategoryType.ALL) {
    return <></>;
  }

  return (
    <S.Description selectedCategory={selectedCategory}>
      {projectCategoryDescription[selectedCategory]}
    </S.Description>
  );
}
