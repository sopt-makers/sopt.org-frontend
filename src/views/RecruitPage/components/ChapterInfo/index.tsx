import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { Part } from '@src/lib/types/universal';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import TabBar from '../common/Tabs';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/style';
import { infoMap } from './constants';
import * as S from './style';

const ChapterInfo = () => {
  const [selectedTab, setSelectedTab] = useState<Part>(Part.PLAN);

  return (
    <S.Wrapper id="chapter-info">
      <SectionTitleWrapper>
        <SectionTitleTranslate>Positions</SectionTitleTranslate>
        <S.SectionWrapper>
          <SectionTitle>SOPT 34기는 </SectionTitle>
          <SectionTitle>총 6개의 파트로 이루어져 있어요.</SectionTitle>
        </S.SectionWrapper>
      </SectionTitleWrapper>
      <TabBar
        type="without-all"
        onTabClick={setSelectedTab}
        selectedTab={selectedTab}
        amplitudeTrackingName={'click_recruit_description_part'}
      />
      <Flex dir="column" gap="15rem">
        <S.BlueChip>{parsePartToKorean(selectedTab)} 파트는 이런 걸 배워요</S.BlueChip>
        <S.Container>
          <S.InfoWrapper>{infoMap[selectedTab].info}</S.InfoWrapper>
        </S.Container>
      </Flex>
      <Flex dir="column" gap="15rem">
        <S.GreenChip>이런 분이면 좋아요!</S.GreenChip>
        <S.Container>
          <S.FitWrapper>
            {infoMap[selectedTab].fit.map((fit, idx) => (
              <div key={idx}>{fit}</div>
            ))}
          </S.FitWrapper>
        </S.Container>
      </Flex>
    </S.Wrapper>
  );
};

export default ChapterInfo;
