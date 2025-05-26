import { track } from '@amplitude/analytics-browser';
import { useContext, useState } from 'react';
import { PartCurriculumType } from '@src/lib/types/admin';
import { Part, TabType } from '@src/lib/types/universal';
import { parseStringToPart } from '@src/lib/utils/parseStringToPart';
import { BrandingColorContext } from '@src/views/AboutPage';
import TabBar from '../../@common/TabBar';
import * as S from './style';

type CurriculumContentProps = {
  curriculums: PartCurriculumType[];
};

const CurriculumContent = ({ curriculums }: CurriculumContentProps) => {
  const [currentPart, setCurrentPart] = useState(Part.PLAN);
  const { main } = useContext(BrandingColorContext);

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
      <S.CurriList>
        {curriObj[currentPart].map((v, idx) => (
          <S.CurriItem key={`${v}_${idx}`}>
            <S.CurriHighlight mainColor={'#' + main}>
              {String(idx + 1).padStart(2, '0')}
            </S.CurriHighlight>
            {v}
          </S.CurriItem>
        ))}
      </S.CurriList>
    </S.CurriculumContent>
  );
};

export default CurriculumContent;
