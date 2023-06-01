import { ExtraPart } from '@src/lib/types/universal';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import useFetch from '../../hooks/useFetch';
import SopticleCard from './Card';
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
        {sopticles.data.map((sopticle) => (
          <SopticleCard key={sopticle.id} sopticle={sopticle} />
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
