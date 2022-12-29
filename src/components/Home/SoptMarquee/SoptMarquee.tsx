import Marquee from 'react-fast-marquee';
import * as S from './SoptMarquee.style';

interface MarqueeProps {
  isReverse?: boolean;
}

function SoptMarquee({ isReverse = false }: MarqueeProps) {
  const direction = isReverse ? 'left' : 'right';

  return (
    <S.StyleWrap isReverse={isReverse}>
      <Marquee direction={direction} gradient={false}>
        SHOUT OUR PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT
        OUR PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT OUR
        PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT OUR
        PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT OUR PASSION TOGETHER · SHOUT OUR
        PASSION TOGETHER · SHOUT OUR PASSION TOGETHER ·&nbsp;
      </Marquee>
    </S.StyleWrap>
  );
}

export default SoptMarquee;
