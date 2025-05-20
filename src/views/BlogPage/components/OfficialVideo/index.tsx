import { track } from '@amplitude/analytics-browser';
import * as S from './style';
import YouTube from 'react-youtube';

const VIDEO_URL = 'https://www.youtube.com/watch?v=f4-QwhPIlLI';
const VIDEO_ID = 'f4-QwhPIlLI';

const videoOpts = {
  width: '100%',
  height: '224px',
  playerVars: {
    autoplay: 1,
  },
};

const VIDEO_INFO = {
  title: '35기 AND SOPT 데모데이: \n\'Connecting Dots\'',
  description:
    '작년 9월 작은 점으로 모인 우리가 8번의 세미나와 5주간의 앱잼을 지나 비로소 연결되었던 데모데이의 현장 사진을 공개합니다. \n작은 열정들이 모여 엄청난 결과물이 보여졌듯 앞으로 모든 팀의 여정을 응원합니다 ❕',
};

const OfficialVideo = () => {
  return (
    <S.Wrapper
      onClick={() => {
        track('click_sopt_official_video');
        window.open(VIDEO_URL, '_target');
      }}
    >
      <S.Title>🎥 공식 영상을 통해 SOPT를 만나보세요</S.Title>
      <S.VideoWrapper>
        <S.Video>
          <YouTube videoId={VIDEO_ID} opts={videoOpts} />
        </S.Video>
        <S.VideoDescription>
          <S.VideoTitle>{VIDEO_INFO.title}</S.VideoTitle>
          <S.VideoDescriptionText>{VIDEO_INFO.description}</S.VideoDescriptionText>
        </S.VideoDescription>
      </S.VideoWrapper>
    </S.Wrapper>
  );
};

export default OfficialVideo;
