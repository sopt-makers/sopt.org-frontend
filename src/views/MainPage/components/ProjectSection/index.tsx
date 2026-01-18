import Project from '@src/views/MainPage/components/ProjectSection/Project';
import projectThumbnail1 from '@src/assets/images/img_project_thumbnail1.png';
import projectThumbnail2 from '@src/assets/images/img_project_thumbnail2.png';
import projectThumbnail3 from '@src/assets/images/img_project_thumbnail3.png';
import projectThumbnail4 from '@src/assets/images/img_project_thumbnail4.png';
import * as S from './style';
import Button from '@src/views/MainPage/components/@common/Button';
import { useState } from 'react';

interface ProjectSectionProps {
  mainColor: string;
  highColor: string;
}

const projects = [
  {

    thumbnail: projectThumbnail1.src,
    title: 'ELFISODE',
    category: 'APP',
    description: '익명으로 마음을 털어놓고, 또래의 이야기를 받아볼 수 있는\n아이슬란드 청소년 감정 공유 플랫폼',
    status: '',
    members: 10,
  },
  {
    thumbnail: projectThumbnail2.src,
    title: 'Walkie',
    category: 'APP',
    description: '걷기와 헬스케어를 결합해 일상을 더 건강하고 재미있게 즐길\n수 있도록 돕는 서비스입니다.',
    status: '서비스 이용 가능',
    members: 4,
  },
  {
    thumbnail: projectThumbnail3.src,
    title: 'Certi',
    category: 'APP',
    description: '취업을 위한 첫걸음, Certi',
    status: '창업 중',
    members: 13,
  },
  {
    thumbnail: projectThumbnail4.src,
    title: '솔플리',
    category: 'APP',
    description: '혼자만의 시간을 더 쉽게, 더 즐겁게 !',
    status: '창업 중',
    members: 15,
  },
];

export default function ProjectSection({ mainColor, highColor }: ProjectSectionProps) {
  const [isGradientActive, setIsGradientActive] = useState(false);

  return (
    <S.Wrapper>
      <S.GradientWrapper mainColor={mainColor} highColor={highColor} active={isGradientActive}>
      <S.TitleWrapper>
        <S.Title>270개의 IT 서비스</S.Title>
        <S.Strong mainColor={mainColor}>{'매 기수\n+20개의 프로젝트'}</S.Strong>
      </S.TitleWrapper>
        <S.ProjectListLayout>
          <S.ProjectList onPointerEnter={() => setIsGradientActive(true)} onPointerLeave={() => setIsGradientActive(false)}>
            {projects.map((project, idx) => (
              <Project key={`${project.title}-${idx}`} {...project} />
            ))}
          </S.ProjectList>
          <Button onMouseEnter={() => setIsGradientActive(true)} onMouseLeave={() => setIsGradientActive(false)}>
            역대 프로젝트 더보기 <S.RightArrowIcon />
          </Button>
        </S.ProjectListLayout>
      </S.GradientWrapper>
    </S.Wrapper>
  );
}