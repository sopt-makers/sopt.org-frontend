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

function Footer(props: Pick<OwnOrganizationCardProps, 'nameKor' | 'nameEng'>) {
  return (
    <S.FooterWrapper>
      <S.FooterKorName>{props.nameKor}</S.FooterKorName>
      <S.FooterEngName>{props.nameEng}</S.FooterEngName>
    </S.FooterWrapper>
  );
}

export default function OwnOrganizationCard(props: OwnOrganizationCardProps) {
  return (
    <FlippableCard
      frontContent={
        <S.CardWrapper background={`url(${props.frontSideBg}) center`}>
          <Footer nameKor={props.nameKor} nameEng={props.nameEng} />
        </S.CardWrapper>
      }
      backContent={
        <S.CardWrapper background={props.backSideBg}>
          <S.ContentWrapper>
            {props.description.map((textNode, index) => (
              <S.TextWrapper key={index} weight={textNode.weight}>
                {textNode.content}
              </S.TextWrapper>
            ))}
          </S.ContentWrapper>
          <Footer nameKor={props.nameKor} nameEng={props.nameEng} />
        </S.CardWrapper>
      }
    />
  );
}
