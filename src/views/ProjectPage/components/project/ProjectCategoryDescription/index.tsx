import { ProjectCategoryType } from '@src/lib/types/project';
import * as S from './style';

const DESCRIPTION_TEXT = {
  [ProjectCategoryType.APPJAM]:
    '5주간의 집중 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트, APPJAM',
  [ProjectCategoryType.SOPKATHON]:
    '무박 2일간의 해커톤을 통해 아이디어를 빠르게 프로덕트로 만들어보는 프로젝트, SOPKATHON',
  [ProjectCategoryType.SOPTERM]:
    '4개월간의 장기 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트, SOPT-TERM',
  [ProjectCategoryType.ALL]: '',
};

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
      {DESCRIPTION_TEXT[selectedCategory]}
    </S.Description>
  );
}
