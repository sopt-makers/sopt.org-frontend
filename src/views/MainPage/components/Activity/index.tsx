import { Ref, forwardRef } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import { Activity } from '@src/lib/constants/main';
import Tab from '../Tab';
import Card from './Card';
import MobileCard from './MobileCard';
import * as S from './style';

function CardHover(_props: unknown, ref: Ref<HTMLDivElement>) {
  const isMobileSize = useIsMobile('768rem');
  const tab = isMobileSize ? 'Activity' : '';

  return (
    <div ref={ref}>
      <Tab
        tab={tab}
        title={'매 기수 진행되는, 다양한 활동들!'}
        description={
          '솝트에서는 매 기수 내 정기적으로 진행되는 다양한 활동들이 있어요.\n 각 파트원들과 친목 및 실력을 쌓을 수 있는 행사들을 통해, 솝트를 더 즐겁게 보낼 수 있어요.'
        }
      />
      {isMobileSize ? (
        <MobileCard />
      ) : (
        <S.CardWrapper>
          {Object.values(Activity).map(({ img, navKor, navEng, description }) => {
            return (
              <Card
                key={navEng}
                img={img}
                navKor={navKor}
                navEng={navEng}
                description={description}
              />
            );
          })}
        </S.CardWrapper>
      )}
    </div>
  );
}

export default forwardRef(CardHover);
