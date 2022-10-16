import appstore from '@src/assets/icons/appstore_icon.svg';
import iFacebookLogo from '@src/assets/icons/facebook_logo.svg';
import github from '@src/assets/icons/github_icon.svg';
import googleplay from '@src/assets/icons/googleplay_icon.svg';
import instagram from '@src/assets/icons/instagram_icon.svg';
import iInstagramLogo from '@src/assets/icons/instagram_logo.svg';
import iKakaoLogo from '@src/assets/icons/kakao_logo.svg';
import iMailLogo from '@src/assets/icons/mail_logo.svg';
import media from '@src/assets/icons/media_icon.svg';
import website from '@src/assets/icons/website_icon.svg';
import iYoutubeLogo from '@src/assets/icons/youtube_logo.svg';
import IRightArrow from '@src/assets/images/rightArrow.svg';
import IToggle from '@src/assets/images/toggle.svg';
import { getProjectDetail } from '@src/lib/project';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useQuery } from 'react-query';

import * as S from './ProjectDetail.style';

interface TeamMembersType {
  name: string;
  role: string;
  roleDetail: string;
}

interface LinkType {
  type: string;
  url: string;
}

function ProjectDetail() {
  const { data } = useQuery('projectDetail', () => getProjectDetail(0));
  const [isOverviewOpened, setIsOverviewOpened] = useState(false);
  const [isTeamMemberOpened, setIsTeamMemberOpened] = useState(false);

  if (!data) return;

  const {
    logoImageUrl,
    name,
    shortIntroduction,
    semester,
    serviceType,
    startDate,
    endDate,
    inProgress,
    isBusinessing,
    isProvidingService,
    link,
    teamMembers,
    detail,
  } = data;

  const dateFormat = (date: string) => {
    const splitedDate = date.split('-');

    return splitedDate[0] + '.' + splitedDate[1];
  };

  const getLinkNameAndSrcWithType = (type: string) => {
    switch (type) {
      case 'website':
        return { name: '웹사이트', src: website };
      case 'playstore':
        return { name: '플레이스토어', src: googleplay };
      case 'appstore':
        return { name: '앱스토어', src: appstore };
      case 'github':
        return { name: 'Github', src: github };
      case 'instagram':
        return { name: '인스타그램', src: instagram };
      default:
        return { name: '발표영상', src: media };
    }
  };

  return (
    <>
      <S.Root>
        <S.ProjectHeader>
          <S.LogoImageWrapper>
            <Image src={logoImageUrl} alt="logo" width="56" height="56" />
          </S.LogoImageWrapper>
          <h1>{name}</h1>
          <p>{shortIntroduction}</p>
        </S.ProjectHeader>

        <S.ProjectOverview isOverviewOpened={isOverviewOpened}>
          <S.ToggleWrapper>
            <S.Title>프로젝트 요약</S.Title>
            <button type="button" onClick={() => setIsOverviewOpened((prev) => !prev)}>
              <S.OverviewToggleImage isOverviewOpened={isOverviewOpened}>
                <Image src={IToggle} alt="toggle button" />
              </S.OverviewToggleImage>
            </button>
          </S.ToggleWrapper>
          <S.ProjectOverviewDetail isOverviewOpened={isOverviewOpened}>
            <S.ProjectInfo>
              <div>
                <h1>프로젝트 기간</h1>
                <h1>진행 기수</h1>
                <h1>프로젝트 형태</h1>
                <h1>프로젝트 상태</h1>
                <h1>프로젝트 링크</h1>
              </div>

              <div>
                <span>
                  {dateFormat(startDate)} - {inProgress ? '진행중' : dateFormat(endDate)}
                </span>
                <span>{semester ? semester + '기' : '-'}</span>
                <span>
                  {serviceType.map((type: string) => (type === 'WEB' ? '웹' : '앱')).join(', ')}
                </span>
                <span>
                  {isProvidingService && '운영중'}
                  {isBusinessing && '창업중'}
                </span>
                <span>{link.length ? link.length + '개' : '-'}</span>
              </div>
            </S.ProjectInfo>
            <S.ProjectLinkWrapper>
              {link.map(({ type, url }: LinkType) => {
                const { name, src } = getLinkNameAndSrcWithType(type);

                return (
                  <Link href={url} key={type}>
                    <S.ProjectLink>
                      <Image src={src} alt={type} width="56" height="56" />
                      <span>{name}</span>
                    </S.ProjectLink>
                  </Link>
                );
              })}
            </S.ProjectLinkWrapper>
          </S.ProjectOverviewDetail>
        </S.ProjectOverview>

        <S.ProjectTeam>
          <S.ToggleWrapper>
            <S.Title>프로젝트 팀원</S.Title>
            <button type="button" onClick={() => setIsTeamMemberOpened((prev) => !prev)}>
              <S.TeamMemberToggleImage isTeamMemberOpened={isTeamMemberOpened}>
                <Image src={IToggle} alt="toggle button" />
              </S.TeamMemberToggleImage>
            </button>
          </S.ToggleWrapper>
          <S.TeamMembers isTeamMemberOpened={isTeamMemberOpened}>
            {teamMembers.map(({ name, role, roleDetail }: TeamMembersType) => (
              <S.Members key={name}>
                <h1>{role}</h1>

                <S.MemberDetail>
                  <h1>{name}</h1>
                  <p>{roleDetail}</p>
                </S.MemberDetail>
              </S.Members>
            ))}
          </S.TeamMembers>
        </S.ProjectTeam>

        <S.ProjectDescription>
          <S.Title>프로젝트 설명</S.Title>
          <p>{detail}</p>
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
