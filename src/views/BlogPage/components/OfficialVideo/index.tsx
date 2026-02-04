import { track } from '@amplitude/analytics-browser';
import YouTube from 'react-youtube';
import * as S from './style';

const VIDEO_URL = 'https://youtu.be/Fnf_exsuhOw?si=5vX_talfMv43VNKB';
const VIDEO_ID = 'Fnf_exsuhOw';

const videoOpts = {
  width: '100%',
  height: '224px',
  playerVars: {
    autoplay: 1,
  },
};

const VIDEO_INFO = {
  title: '[Momentum: 축적된 움직임이 그려낸 단 하나의 궤도]',
  description:
    '지난 19일 솝트의 꽃, 5주간의 장기 해커톤 앱잼의 데모데이가 국회의사당 대회의실에서 진행되었는데요. \n 이번 데모데이 \'Momentum:\'에는 500명에 가까운 분들이 찾아주셨습니다. \n 뜨거웠던 열정의 현장을 카메라에 담아보았는데요, 그 열기를 한 번 느껴보시죠 🚀',
};

const OfficialVideo = () => {
  return (
    <S.Wrapper>
      <S.Title>🎥 공식 영상을 통해 SOPT를 만나보세요</S.Title>
      <S.VideoWrapper
        onClick={() => {
          track('click_sopt_official_video');
          window.open(VIDEO_URL, '_target');
        }}
      >
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
