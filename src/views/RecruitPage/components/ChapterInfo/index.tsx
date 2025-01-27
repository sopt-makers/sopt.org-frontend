import { useContext, useState } from 'react';
import Flex from '@src/components/common/Flex';
import { PartInfoType } from '@src/lib/types/admin';
import { Part } from '@src/lib/types/universal';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import { parseStringToPart } from '@src/lib/utils/parseStringToPart';
import { BrandingColorContext } from '../..';
import TabBar from '../common/Tabs';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/style';
import * as S from './style';

const ChapterInfo = ({ info, generation }: { info: PartInfoType[]; generation: number }) => {
  const { main, point } = useContext(BrandingColorContext);
  const [selectedTab, setSelectedTab] = useState<Part>(Part.PLAN);
  const parsedPart = parsePartToKorean(selectedTab);

  const infoMap = info.reduce((acc, { part, introduction }) => {
    acc[parseStringToPart(part)] = introduction;
    return acc;
  }, {} as Record<Part, Record<'content' | 'preference', string>>);

  return (
    <S.Wrapper id="chapter-info">
      <SectionTitleWrapper>
        <SectionTitleTranslate mainColor={'#' + main}>Positions</SectionTitleTranslate>
        <S.SectionWrapper>
          <SectionTitle>SOPT {generation}기는</SectionTitle>
          <SectionTitle>총 6개의 파트로 이루어져 있어요.</SectionTitle>
        </S.SectionWrapper>
      </SectionTitleWrapper>
      <TabBar
        type="without-all"
        onTabClick={setSelectedTab}
        selectedTab={selectedTab}
        amplitudeTrackingName={'click_recruit_description_part'}
      />
      <Flex dir="column" gap="15px">
        <S.BlueChip>{parsedPart} 파트는 이런 걸 배워요</S.BlueChip>
        <S.Container>
          <S.InfoWrapper>{infoMap[selectedTab].content}</S.InfoWrapper>
        </S.Container>
      </Flex>
      <Flex dir="column" gap="15px">
        <S.GreenChip mainColor={'#' + main}>이런 분이면 좋아요!</S.GreenChip>
        <S.Container>
          <S.FitWrapper pointColor={'#' + point}>{infoMap[selectedTab].preference}</S.FitWrapper>
        </S.Container>
      </Flex>
    </S.Wrapper>
  );
};

export default ChapterInfo;
