import { track } from '@amplitude/analytics-browser';
import { useState } from 'react';
import { PartCurriculumType } from '@src/lib/types/admin';
import { Part, TabType } from '@src/lib/types/universal';
import { parseStringToPart } from '@src/lib/utils/parseStringToPart';
import TabBar from '../../@common/TabBar';
import * as S from './style';

type CurriculumContentProps = {
  curriculums: PartCurriculumType[];
};

const CurriculumContent = ({ curriculums }: CurriculumContentProps) => {
  const [currentPart, setCurrentPart] = useState(Part.PLAN);

  const handleTabClick = (tab: TabType) => {
    setCurrentPart(tab.value);
    track('click_about_part', { part: tab.label });
  };

  // formatter
  const curriObj = Object.fromEntries(
    curriculums.map((el) => [parseStringToPart(el.part), el.curriculums]),
  );

  return (
    <S.CurriculumContent>
      <TabBar onTabClick={handleTabClick} selectedTab={currentPart} includesExtra={false} />
      <ul>
        {curriObj[currentPart].map((v) => (
          <S.CurriItem key={v}>{v}</S.CurriItem>
        ))}
      </ul>
    </S.CurriculumContent>
  );
};

export default CurriculumContent;
