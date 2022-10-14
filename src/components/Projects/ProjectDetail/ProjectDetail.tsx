import Image from 'next/image';
import Link from 'next/link';
import iFacebookLogo from 'src/assets/icons/facebook_logo.svg';
import iInstagramLogo from 'src/assets/icons/instagram_logo.svg';
import iKakaoLogo from 'src/assets/icons/kakao_logo.svg';
import iMailLogo from 'src/assets/icons/mail_logo.svg';
import iYoutubeLogo from 'src/assets/icons/youtube_logo.svg';
import IRightArrow from 'src/assets/images/rightArrow.svg';
import IToggle from 'src/assets/images/toggle.svg';

import * as S from './ProjectDetail.style';
function ProjectDetail() {
  return (
    <>
      <S.Root>
        <S.ProjectHeader>
          {/* <Image src=""/> */}
          <h1>러너스하이</h1>
          <p>MZ세대를 위한 실시간 러너 매칭 기반 러닝 경쟁 서비스</p>
        </S.ProjectHeader>

        <S.ProjectOverview>
          <S.ToggleWrapper>
            <S.Title>프로젝트 요약</S.Title>
            <button type="button">
              <Image src={IToggle} alt="toggle button" />
            </button>
          </S.ToggleWrapper>
          <S.ProjectInfo>
            <div>
              <h1>프로젝트 기간</h1>
              <span>2022.08 - 2022.10</span>
            </div>
            <div>
              <h1>진행 기수</h1>
              <span>29기</span>
            </div>
            <div>
              <h1>프로젝트 형태</h1>
              <span>앱</span>
            </div>
            <div>
              <h1>프로젝트 상태</h1>
              <span>운영중, 창업중</span>
            </div>
            <div>
              <h1>프로젝트 링크</h1>
              <span>6개</span>
            </div>
          </S.ProjectInfo>
          <S.ProjectLinkWrapper>
            <S.ProjectLink>
              {/* <Image src=""/> */}
              <span>웹사이트</span>
            </S.ProjectLink>
          </S.ProjectLinkWrapper>
        </S.ProjectOverview>

        <S.ProjectTeam>
          <S.ToggleWrapper>
            <S.Title>프로젝트 팀원</S.Title>
            <button type="button">▶️</button>
          </S.ToggleWrapper>
          <S.Members>
            <h1>Project Manager</h1>
            <S.MemberDetail>
              <h1>이정연</h1>
              <p>프로젝트 기획 및 와프 제작</p>
            </S.MemberDetail>
          </S.Members>
        </S.ProjectTeam>

        <S.ProjectDescription>
          <S.Title>프로젝트 설명</S.Title>
          <p>description</p>
        </S.ProjectDescription>
      </S.Root>
      <S.Footer>
        <S.Rule>
          <S.RuleLink>
            <Link href="https://sopt.org/rules">SOPT 회칙</Link>
          </S.RuleLink>
          <Image width="16" height="16" src={IRightArrow} alt="right arrow" />
        </S.Rule>
        <p>SOPT(솝트, 대학생연합IT벤처창업 동아리</p>
        <p>Copyright&copy2022.SOPT.All rights reserved.</p>
        <S.Channels>
          <h1>SOPT 채널 바로가기</h1>
          <div>
            <S.Channel>
              <Link href="mailto:president@sopt.org">
                <Image src={iMailLogo} alt="mail logo" />
              </Link>
            </S.Channel>
            <S.Channel>
              <Link href="https://www.facebook.com/clubsopt/">
                <Image src={iFacebookLogo} alt="facebook logo" />
              </Link>
            </S.Channel>
            <S.Channel>
              <Link href="https://www.instagram.com/sopt_timi_tmi/">
                <Image src={iInstagramLogo} alt="instagram logo" />
              </Link>
            </S.Channel>
            <S.Channel>
              <Link href="https://www.youtube.com/c/SOPTMEDIA">
                <Image src={iYoutubeLogo} alt="youtube logo" />
              </Link>
            </S.Channel>
            <S.Channel>
              <Link href="http://pf.kakao.com/_JdTKd">
                <Image src={iKakaoLogo} alt="kakao logo" />
              </Link>
            </S.Channel>
          </div>
        </S.Channels>
      </S.Footer>
    </>
  );
}

export default ProjectDetail;
