import { useMemo, useState } from 'react';
import DataErrorBanner from '@src/components/DataErrorBanner';
import Flex from '@src/components/common/Flex';
import { ExtraPart } from '@src/lib/types/universal';
import { PartExtraType } from '@src/lib/types/universal';
import { emptyMembers } from '@src/views/AboutPage/constant/emptyMembers';
import useFetchMember from '@src/views/AboutPage/hooks/useFetchMemeber';
import useResponsiveMember from '@src/views/AboutPage/hooks/useResponsiveMember';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import TabBar from '../../common/TabBar';
import MemberCard from '../Card';
import * as St from './style';

const MemberContent = () => {
  const { memberCardsCount, shouldNotShownWithError } = useResponsiveMember();

  const [currentPart, setCurrentPart] = useState<ExtraPart>(PartExtraType.ALL);
  const state = useFetchMember(currentPart);

  const errorContent = <DataErrorBanner />;
  const tabBarContent = !(state._TAG === 'ERROR' && shouldNotShownWithError) && (
    <TabBar onTabClick={setCurrentPart} selectedTab={currentPart} includesExtra={true} />
  );
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
      {errorContent}
      {tabBarContent}
      <St.CardContainer>{cardContent}</St.CardContainer>
    </Flex>
  );
};

export default MemberContent;
