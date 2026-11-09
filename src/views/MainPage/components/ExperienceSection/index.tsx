import { useState } from 'react';
import SectionLabel from '@src/components/common/SectionLabel';
import { GetHomepageResponse } from '@src/lib/types/admin';
import ExperienceItem from './ExperienceItem';
import * as S from './style';

const EXPERIENCES = [
  {
    name: 'STARTUP',
    description:
      '파트가 모여 한 팀이 되고, 서비스를 기획부터 출시까지 함께 만들어 세상에 내놓는 SOPT의 문화입니다.',
  },
  {
    name: 'COMMUNITY',
    description:
      '기수가 끝나도 남는 사람들. 파트와 기수를 넘어 서로의 다음을 끌어 주는 관계가 이어집니다.',
  },
  {
    name: 'NETWORKING',
    description:
      '현업에 나간 선배들과 지금의 기수가 만나는 자리. 궁금한 것을 가장 빠르게 묻는 통로입니다.',
  },
] as const;

interface ExperienceSectionProps {
  coreValues: GetHomepageResponse['coreValue'];
  mainColor: string;
}

export default function ExperienceSection({ coreValues, mainColor }: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <S.Container id="experience" aria-labelledby="experience-title" mainColor={mainColor}>
      <S.Header>
        <SectionLabel label="Experience" color={mainColor} />
        <S.Title id="experience-title">SOPT만의 경험</S.Title>
      </S.Header>

      <S.Content>
        <S.ImagePanel aria-hidden="true">
          {EXPERIENCES.map(
            ({ name }, index) =>
              coreValues?.[index]?.image && (
                <S.ExperienceImage
                  key={name}
                  src={coreValues[index].image}
                  isActive={activeIndex === index}
                />
              ),
          )}
        </S.ImagePanel>

        <S.Items>
          {EXPERIENCES.map(({ name, description }, index) => (
            <ExperienceItem
              key={name}
              name={name}
              description={description}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </S.Items>
      </S.Content>
    </S.Container>
  );
}
