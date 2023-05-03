import Image from 'next/image';
import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { Part } from '@src/lib/types/universal';
import TabBar from '../../common/TabBar';
import * as St from './style';

type CirriculumContentProps = {
  cirriculums: Record<Part, string>;
};

const CirriculumContent = ({ cirriculums }: CirriculumContentProps) => {
  const [currentPart, setCurrentPart] = useState(Part.PLAN);

  return (
    <Flex dir="column" gap={{ mobile: 18, tablet: 24, desktop: 48 }}>
      <TabBar onTabClick={setCurrentPart} selectedTab={currentPart} includesExtra={false} />
      <St.ImageWrapper>
        <Image
          src={cirriculums[currentPart]}
          alt={currentPart}
          fill
          style={{ objectFit: 'contain' }}
        />
      </St.ImageWrapper>
    </Flex>
  );
};

export default CirriculumContent;
