import { useMemo } from 'react';
import DataErrorBanner from '@src/components/DataErrorBanner';
import Flex from '@src/components/common/Flex';
import { emptyMembers } from '@src/views/AboutPage/constant/emptyMembers';
import useFetchMember from '@src/views/AboutPage/hooks/useFetchMemeber';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import MemberCard from '../Card';
import * as St from './style';

const MemberContent = () => {
  const state = useFetchMember();

  const errorContent = state._TAG === 'ERROR' && <DataErrorBanner />;

  const cardContent = useMemo(() => {
    if (state._TAG === 'OK' || state._TAG === 'ERROR')
      return (state._TAG === 'OK' ? state.data.members : emptyMembers(6)).map(
        ({
          id,
          name,
          position,
          description,
          currentProject,
          imageSrc,
          gmail,
          linkedin,
          github,
        }) => (
          <MemberCard
            key={id}
            name={name}
            position={position}
            description={description}
            currentProject={currentProject}
            imageSrc={imageSrc}
            gmail={gmail}
            linkedin={linkedin}
            github={github}
          />
        ),
      );

    return (
      <St.OvalSpinnerWrapper>
        <OvalSpinner />
      </St.OvalSpinnerWrapper>
    );
  }, [state]);

  return (
    <Flex
      dir="column"
      gap={{ mobile: 18, tablet: 24, desktop: 48 }}
      style={{ alignItems: 'center' }}
    >
      {errorContent}
      <St.CardContainer>{cardContent}</St.CardContainer>
    </Flex>
  );
};

export default MemberContent;
