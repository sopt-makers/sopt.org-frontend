import { useMemo, useState } from 'react';
import DataErrorBanner from '@src/components/DataErrorBanner';
import Flex from '@src/components/common/Flex';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { ExtraPart } from '@src/lib/types/universal';
import { PartExtraType } from '@src/lib/types/universal';
import { emptyMembers } from '@src/views/AboutPage/constant/emptyMembers';
import useFetchMember from '@src/views/AboutPage/hooks/useFetchMemeber';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import TabBar from '../../common/TabBar';
import MemberCard from '../Card';
import * as St from './style';

const MemberContent = () => {
  const [currentPart, setCurrentPart] = useState<ExtraPart>(PartExtraType.ALL);
  const state = useFetchMember(currentPart);

  const isTablet = useIsTablet('766px', '1199.9px');
  const isMobile = useIsMobile();

  const memberCardsCount = useMemo(() => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4;
  }, [isMobile, isTablet]);

  const cardContent = useMemo(() => {
    if (state._TAG === 'OK')
      return state.data.members.map(({ id, name, src, description, part }) => (
        <MemberCard key={id} imgSrc={src} name={name} description={description} part={part} />
      ));

    if (state._TAG === 'ERROR')
      return emptyMembers(memberCardsCount).map(({ id, name, src, description, part }) => (
        <MemberCard key={id} imgSrc={src} name={name} description={description} part={part} />
      ));

    return (
      <St.OvalSpinnerWrapper>
        <OvalSpinner />
      </St.OvalSpinnerWrapper>
    );
  }, [state, memberCardsCount]);

  return (
    <Flex dir="column" gap={{ mobile: 18, tablet: 24, desktop: 48 }}>
      {state._TAG === 'ERROR' && <DataErrorBanner />}
      {!(state._TAG === 'ERROR' && isMobile) && (
        <TabBar onTabClick={setCurrentPart} selectedTab={currentPart} includesExtra={true} />
      )}
      <St.CardContainer>{cardContent}</St.CardContainer>
    </Flex>
  );
};

export default MemberContent;
