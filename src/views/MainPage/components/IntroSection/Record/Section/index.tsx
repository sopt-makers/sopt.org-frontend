import { useRouter } from 'next/router';
import { useState } from 'react';
import { PATHS } from '@src/lib/constants/routes';
import { GetAboutpageResponse } from '@src/lib/types/admin';
import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import RecordList from '@src/views/MainPage/components/IntroSection/Record/List';
import * as S from './style';

type RecordSectionProps = Pick<GetAboutpageResponse, 'generation' | 'activitiesRecords'> & {
  mainColor: string;
};

const RecordSection = ({ generation, activitiesRecords, mainColor }: RecordSectionProps) => {
  const [isGradientActive, setIsGradientActive] = useState(false);

  const router = useRouter();

  return (
    <S.GradientWrapper mainColor={mainColor} active={isGradientActive}>
      <S.Wrapper>
        <SectionTop
          korTitle={`${generation - 1}기 활동 레코드`}
          engTitle="Records"
          mainColor={mainColor}
        />
        <RecordList activitiesRecords={activitiesRecords} mainColor={mainColor} />
        <S.Button
          onClick={() => router.push(PATHS.ABOUT)}
          aria-label="소개페이지로 이동"
          onPointerEnter={() => setIsGradientActive(true)}
          onPointerLeave={() => setIsGradientActive(false)}
        >
          이번 기수가 궁금하다면 <S.RightArrowIcon />
        </S.Button>
      </S.Wrapper>
    </S.GradientWrapper>
  );
};

export default RecordSection;
