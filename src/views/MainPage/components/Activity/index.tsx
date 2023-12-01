import { Activity } from '@src/lib/constants/main';
import Tab from '../Tab';
import Card from './Card';
import * as S from './style';

export default function CardHover() {
  return (
    <S.Background>
      <Tab
        tab={'(1) 기수내 정기 행사'}
        title={'매 기수 진행되는, 다양한 활동들!'}
        description={
          'SOPT에서는 매 기수 내 정기적으로 진행되는 다양한 활동들이 있어요. \n 각 파트원들과 친목 및 실력을 쌓을 수 있는 행사들을 통해, SOPT를 보다 즐겨봅시다.'
        }
      ></Tab>
      <S.CardWapper>
        {Activity.map(({ img, navKor, navEng, description }) => {
          return (
            <Card
              key={navKor}
              img={img}
              navKor={navKor}
              navEng={navEng}
              description={description}
            />
          );
        })}
      </S.CardWapper>
    </S.Background>
  );
}
