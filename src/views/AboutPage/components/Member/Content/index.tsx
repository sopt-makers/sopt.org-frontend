import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { ExtraPart } from '@src/lib/types/universal';
import { PartExtraType } from '@src/lib/types/universal';
import useFetchMember from '@src/views/AboutPage/hooks/useFetchMemeber';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import TabBar from '../../common/TabBar';
import MemberCard from '../Card';
import * as St from './style';

const MemberContent = () => {
  const [currentPart, setCurrentPart] = useState<ExtraPart>(PartExtraType.ALL);
  const state = useFetchMember(currentPart);

  return (
    <Flex dir="column" gap={{ mobile: 18, tablet: 24, desktop: 48 }}>
      <TabBar onTabClick={setCurrentPart} selectedTab={currentPart} includesExtra={true} />
      <St.CardContainer>
        {state._TAG === 'OK' ? (
          state.data.members.map(({ id, name, src, description, part }) => (
            <MemberCard key={id} imgSrc={src} name={name} description={description} part={part} />
          ))
        ) : (
          <St.OvalSpinnerWrapper>
            <OvalSpinner />
          </St.OvalSpinnerWrapper>
        )}
      </St.CardContainer>
    </Flex>
  );
};

export default MemberContent;
