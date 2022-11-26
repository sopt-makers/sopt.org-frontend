import DotImg from '@src/assets/images/DotImg.svg';
import { PART_INFO } from '@src/constants/about';
import Image from 'next/image';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';

import PartInfo from '../PartInfo/PartInfo';
import * as S from './PartInfos.style';

function PartInfos() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <S.Root>
      {PART_INFO?.map((item, idx) => (
        <Fragment key={idx}>
          <Fade left delay={item.delay}>
            <PartInfo
              title={item.title}
              contents={item.contents}
              height={isDesktop ? '160px' : '150px'}
              width={isDesktop ? '266px' : '226px'}
            />
          </Fade>
          <Fade left delay={item.delay + 150}>
            <S.DotImg>
              {idx < PART_INFO.length - 1 && (
                <Image
                  src={DotImg}
                  width={isDesktop ? 50 : 30}
                  height={isDesktop ? 10 : 6}
                  alt="split dot"
                  blurDataURL={DotImg}
                  placeholder="blur"
                />
              )}
            </S.DotImg>
          </Fade>
        </Fragment>
      ))}
    </S.Root>
  );
}

export default PartInfos;
