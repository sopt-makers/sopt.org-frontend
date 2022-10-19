import { LeaderType } from '@src/utils/history';
import { useRouter } from 'next/router';

import * as S from './Sidebar.style';

interface SidebarProps {
  firstSection: LeaderType;
  secondSection?: Array<LeaderType>;
  thirdSection?: Array<LeaderType>;
}

function Sidebar({ firstSection, secondSection, thirdSection }: SidebarProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target instanceof Element) {
      router.push({
        pathname: `/history/${router?.query?.id}`,
        query: {
          current: e.currentTarget?.id,
        },
      });
    }
  };

  return (
    <S.Root>
      <S.UL>
        <S.LI
          id={firstSection.id.toString()}
          isCurrent={router?.query?.current === firstSection.id.toString()}
          currentColor={firstSection?.color}
          onClick={handleClick}
        >
          {firstSection.part}
        </S.LI>
      </S.UL>
      {secondSection && (
        <>
          <S.Line />
          <S.UL>
            {secondSection.map((item) => (
              <S.LI
                key={item?.id}
                id={item?.id.toString()}
                isCurrent={router?.query?.current === item?.id.toString()}
                currentColor={firstSection?.color}
                onClick={handleClick}
              >
                {item.part}
              </S.LI>
            ))}
          </S.UL>
        </>
      )}
      {thirdSection && (
        <>
          <S.Line />
          <S.UL>
            {thirdSection.map((item) => (
              <S.LI
                key={item.id}
                id={item.id.toString()}
                isCurrent={router?.query?.current === item?.id.toString()}
                currentColor={firstSection?.color}
                onClick={handleClick}
              >
                {item.part}
              </S.LI>
            ))}
          </S.UL>
        </>
      )}
    </S.Root>
  );
}

export default Sidebar;
