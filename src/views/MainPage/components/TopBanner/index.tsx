import * as S from './style';
import { ReactComponent as IcView } from '@src/assets/icons/ic_view.svg';
import { ReactComponent as IcTimer } from '@src/assets/icons/ic_timer.svg';

export default function TopBanner() {
  return (
    <S.Container>
    <S.Wrapper>
      <S.Title>SOPT의 34번째 열정이 되어주세요!  &gt;
      </S.Title>
      <S.Description>
        <S.Timer>
            <IcTimer/>
            <span>1일 00:00:00</span>
        </S.Timer>
        <S.View>
            <IcView/><span>200명</span>
        </S.View>
      </S.Description>
    </S.Wrapper>
    </S.Container>
  );
}

