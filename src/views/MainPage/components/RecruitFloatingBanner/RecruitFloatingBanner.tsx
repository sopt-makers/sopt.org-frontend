import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Timer from '@src/components/common/Timer';
import { useIsMobile } from '@src/hooks/useDevice';
import SoptSymbol from '@src/views/MainPage/assets/sopt-symbol.svg';
import dayjs from 'dayjs';

const TARGET_DATE = dayjs('2023-09-08T15:00:00.000Z').toDate();

export function RecruitFloatingBanner() {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <Wrapper>
      <Banner isMobile={isMobile} onClick={() => router.push('/recruit')}>
        <Countdown>
          <Symbol src={SoptSymbol} alt="솝트 심볼" />
          {isMobile ? (
            '33기 YB 지원하기'
          ) : (
            <Timer
              targetDate={TARGET_DATE}
              prefix="33기 YB 모집 마감까지 "
              endMessage="33기 YB 모집이 마감되었습니다"
            />
          )}
        </Countdown>
        <ApplyButton>
          <Link href="/recruit">{isMobile ? '→' : '지원하기→'}</Link>
        </ApplyButton>
      </Banner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 120px;
  transform: translate(-50%, -50%);
  z-index: 9999;

  @media (max-width: 1299px) {
    bottom: 80px;
  }
`;

const Symbol = styled.img`
  width: 52px;
  height: 26px;

  @media (max-width: 1299px) and (min-width: 766px) {
    width: 36px;
    height: 18px;
  }

  @media (max-width: 766px) {
    width: 30px;
    height: 15px;
  }
`;

const Banner = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 753px;
  height: 88px;
  padding: 31px 40px 31px 48px;

  border-radius: 20px;
  border: 1px solid rgba(114, 222, 173, 0.6);
  background: rgba(33, 50, 42, 0.7);

  box-shadow: 0px 4px 20px 0px rgba(32, 39, 38, 0.15);
  backdrop-filter: blur(50px);

  @media (max-width: 1299px) and (min-width: 766px) {
    width: 585px;
    padding: 31px 32px;
  }

  @media (max-width: 766px) {
    width: 312px;
    height: 56px;
    padding: 20px 24px;

    border-radius: 12px;
  }

  cursor: ${({ isMobile }) => (isMobile ? 'pointer' : 'auto')};
`;

const Countdown = styled.div`
  display: flex;
  gap: 16px;

  color: #fcfcfc;
  font-size: 26px;
  font-weight: 700;
  line-height: 100%; /* 26px */
  letter-spacing: -0.52px;

  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }

  @media (max-width: 766px) {
    gap: 8px;

    font-size: 16px;
    letter-spacing: -0.32px;
  }
`;

const ApplyButton = styled.div`
  color: #1deda2;
  font-size: 26px;
  font-weight: 700;
  line-height: 100%; /* 26px */
  letter-spacing: -0.52px;

  cursor: pointer;

  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }

  @media (max-width: 766px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
`;
