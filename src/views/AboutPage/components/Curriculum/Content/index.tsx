import { track } from '@amplitude/analytics-browser';
import Image from 'next/image';
import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { Part, TabType } from '@src/lib/types/universal';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import TabBar from '../../common/TabBar';
import * as St from './style';

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
    <Flex dir="column" gap={{ mobile: 18, tablet: 24, desktop: 48 }}>
      <TabBar onTabClick={handleTabClick} selectedTab={currentPart} includesExtra={false} />
      <St.ImageWrapper>
        <Image
          src={curriculums[currentPart]}
          alt={`${parsePartToKorean(currentPart)}파트 커리큘럼 이미지`}
          fill
          style={{ objectFit: 'contain' }}
        />
      </St.ImageWrapper>
    </Flex>
  );
};

export default CurriculumContent;
