import { useMemo } from 'react';
import Flex from '@src/components/common/Flex';
import OvalSpinner from '@src/components/common/OvalSpinner';
import { emptyMembers } from '@src/views/AboutPage/constant/emptyMembers';
import useFetchMember from '@src/views/AboutPage/hooks/useFetchMemeber';
import MemberCard from '../Card';
import * as St from './style';

const MemberContent = () => {
  const state = useFetchMember();

  //불필요해진 DataErrorBanner 컴포넌트 삭제
  //useQuery로 마이그레이션 하면 state에 따른 조건부 렌더링 코드가 모두 바뀔 것으로 예상되어 관련 코드는 일단 주석처리했습니다
  //const errorContent = state._TAG === 'ERROR' && <DataErrorBanner />;

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
      {/* {errorContent} */}
      <St.CardContainer>{cardContent}</St.CardContainer>
    </Flex>
  );
};

export default MemberContent;
