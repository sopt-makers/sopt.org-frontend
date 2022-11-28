import StudyNetworkingImg from '@src/assets/images/study_networking.svg';
import { NetworkingImage } from '@src/assets/replaceMe/imageList';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import AboutWrapper from '../AboutWrapper';
import * as S from './StudyNetworking.style';

function StudyNetworking() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftTitleProps={
          <>
            <S.Description>{ABOUT_INFO.STUDY_NETWORKUNG.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.STUDY_NETWORKUNG.title}</UnderlinedTitle>
          </>
        }
        leftDescriptionProps={
          <S.Contents>
            {isDesktop
              ? ABOUT_INFO.STUDY_NETWORKUNG.pc_contents
              : ABOUT_INFO.STUDY_NETWORKUNG.mobile_contents}
            <br />
            <br />
            <strong>#누구나_참여하고_친해지는</strong>
          </S.Contents>
        }
        rightProps={
          <Image
            src={StudyNetworkingImg}
            width={475}
            height={250}
            alt="스터디 네트워킹"
            blurDataURL={StudyNetworkingImg}
            placeholder="blur"
          />
        }
      />
      <AboutWrapper.Content>
        <S.ImageListWrapper>
          {NetworkingImage?.map((item) => {
            return (
              <Image
                src={item.image}
                width={isDesktop ? 215 : 200}
                height={isDesktop ? 130 : 120}
                alt={`네트워킹 ${item.id}`}
                key={item.id}
                blurDataURL={item.image}
                placeholder="blur"
              />
            );
          })}
        </S.ImageListWrapper>
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}

export default StudyNetworking;
