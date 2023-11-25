import FlippableCard from '@src/components/common/FlippableCard';
import { TextWeightType } from '@src/lib/types/universal';
import * as S from './style';

type OwnOrganizationCardProps = {
  nameKor: string;
  nameEng: string;
  description: TextWeightType[];
  frontSideBg: string;
  backSideBg: string;
};

function Footer({ nameKor, nameEng }: Pick<OwnOrganizationCardProps, 'nameKor' | 'nameEng'>) {
  return (
    <S.FooterWrapper>
      <S.FooterKorName>{nameKor}</S.FooterKorName>
      <S.FooterEngName>{nameEng}</S.FooterEngName>
    </S.FooterWrapper>
  );
}

export default function OwnOrganizationCard({
  nameKor,
  nameEng,
  description,
  frontSideBg,
  backSideBg,
}: OwnOrganizationCardProps) {
  return (
    <FlippableCard
      frontContent={
        <S.CardWrapper background={`url(${frontSideBg}) center`}>
          <Footer nameKor={nameKor} nameEng={nameEng} />
        </S.CardWrapper>
      }
      backContent={
        <S.CardWrapper background={backSideBg}>
          <S.ContentWrapper>
            {description.map((textNode, index) => (
              <S.TextWrapper key={index} weight={textNode.weight}>
                {textNode.content}
              </S.TextWrapper>
            ))}
          </S.ContentWrapper>
          <Footer nameKor={nameKor} nameEng={nameEng} />
        </S.CardWrapper>
      }
    />
  );
}
