import { Suspense } from 'react';
import Flex from '@src/components/common/Flex';
import OvalSpinner from '@src/components/common/OvalSpinner';
import { MemberType } from '@src/lib/types/about';
import MemberCard from '@src/views/AboutPage/components/Member/Card';
import SectionTop from '../../@common/SectionTop';
import * as St from './style';

type MemberSectionProps = {
  generation: number;
  members: MemberType[];
};

const MemberSection = ({ generation, members }: MemberSectionProps) => {
  return (
    <Flex
      dir="column"
      gap={{ mobile: 24, tablet: 48, desktop: 60 }}
      style={{ position: 'relative' }}
    >
      <St.MarginTop />
      <SectionTop
        engTitle="Executives"
        korTitle={`${generation}기 임원진`}
        description="200명의 활동 회원들이 열정을 외칠 수 있도록, 35기 AND SOPT를 이끄는 임원진들이에요."
      />
      {/* TODO : 서버에서 description을 받아오도록 수정 */}
      <Flex
        dir="column"
        gap={{ mobile: 18, tablet: 24, desktop: 48 }}
        style={{ alignItems: 'center' }}
      >
        <Suspense
          fallback={
            <St.OvalSpinnerWrapper>
              <OvalSpinner />
            </St.OvalSpinnerWrapper>
          }
        >
          {/* {errorContent} */}
          <St.CardContainer>
            {members.map(
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
            )}
          </St.CardContainer>
        </Suspense>
      </Flex>
    </Flex>
  );
};

export default MemberSection;
