import { track } from '@amplitude/analytics-browser';
import Image from 'next/image';
import { useState } from 'react';
import { Part, TabType } from '@src/lib/types/universal';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import TabBar from '../../@common/TabBar';
import * as S from './style';

type CurriculumContentProps = {
  curriculums: Record<Part, string>;
};

const CurriculumContent = ({ curriculums }: CurriculumContentProps) => {
  const [currentPart, setCurrentPart] = useState(Part.PLAN);

  const handleTabClick = (tab: TabType) => {
    setCurrentPart(tab.value);
    track('click_about_part', { part: tab.label });
  };

  return (
    <S.CurriculumContent>
      <TabBar onTabClick={handleTabClick} selectedTab={currentPart} includesExtra={false} />
      <S.ImageWrapper>
        <Image
          src={curriculums[currentPart]}
          alt={`${parsePartToKorean(currentPart)}파트 커리큘럼 이미지`}
          fill
          quality={70}
          sizes="(max-width: 428px) 361px, (max-width: 768px) 662px, 1200px"
          style={{ objectFit: 'contain', borderRadius: '10px' }}
        />
      </S.ImageWrapper>
    </S.CurriculumContent>
  );
};

export default CurriculumContent;
