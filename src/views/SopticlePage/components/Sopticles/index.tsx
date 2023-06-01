import NullImage from '@src/assets/images/null_image.png';
import { ExtraPart } from '@src/lib/types/universal';
import { formatDate } from '@src/utils/dateFormat';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import useFetch from '../../hooks/useFetch';
import * as S from './style';

type SopticlesProps = {
  selectedTab: ExtraPart;
};

const Sopticles = ({ selectedTab }: SopticlesProps) => {
  const { state: sopticles, ref, canGetMoreSopticles } = useFetch(selectedTab);

  if (!(sopticles._TAG === 'OK' || sopticles._TAG === 'LOADING')) return null;

  return (
    <>
      <S.Wrapper>
        {sopticles.data.map((sopticle, idx) => (
          <S.Card key={`${sopticle.id}-${idx}`} href={sopticle.link} target="_blank">
            <S.ThumbnailWrapper>
              <S.Thumbnail src={sopticle.thumbnail} alt={sopticle.title} fill />
              <S.ChipWrapper>
                <S.Chip>{sopticle.part}</S.Chip>
                <S.Chip>{sopticle.semester}기</S.Chip>
              </S.ChipWrapper>
            </S.ThumbnailWrapper>
            <S.Section>
              <S.Title>{sopticle.title}</S.Title>
              <S.Desc>{sopticle.subtitle}</S.Desc>
            </S.Section>
            <S.LastSection>
              <S.AuthorThumbnail
                src={sopticle.authorProfileUrl ?? NullImage.src}
                width={28}
                height={28}
                alt={sopticle.author}
              />
              <S.DeemedText>{sopticle.author}</S.DeemedText>
              <S.ColSeparator />
              <S.DeemedText>{formatDate(sopticle.publishedAt, 'yyyymmdd', '.')}</S.DeemedText>
            </S.LastSection>
          </S.Card>
        ))}
      </S.Wrapper>
      {(canGetMoreSopticles || sopticles._TAG === 'LOADING') && (
        <S.SpinnerWrapper ref={canGetMoreSopticles ? ref : undefined}>
          <OvalSpinner />
        </S.SpinnerWrapper>
      )}
    </>
  );
};

export default Sopticles;
