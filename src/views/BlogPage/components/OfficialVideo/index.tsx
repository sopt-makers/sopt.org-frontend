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
  title: 'SYSTEM UPDATE : [SUNRISE]',
  description:
    '국내 최대 규모의 대학생 연합 IT 벤처창업 동아리 SOPT에서 앱잼(AppJam) 데모데이를 개최했습니다.\n세미나를 통해 배우고 익힌 기술을 바탕으로 각 팀이 문제를 자유롭게 해석하고, 독창적인 하나의 프로덕트로 구현해낸 결과를 확인해보세요.\n5주간의 집중적인 개발 끝에 완성된 앱잼 팀들의 프로덕트, 그리고 새로운 세대의 SOPT SYSTEM UPDATE를 지금 바로 만나보세요!',
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
