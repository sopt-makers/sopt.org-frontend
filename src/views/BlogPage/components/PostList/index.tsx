import type { GetPostListResponseType } from '@src/lib/types/blog';
import Post from '@src/views/BlogPage/components/Post';
import * as S from './style';

/** 
 * 다음과 같이 데이터가 들어온다고 가정하고 작성하였습니다. (솝티클 리스트)
 * TODO: 솝티클, 활동 후기 API 업데이트 후 리스펀스 값에 따른 코드 수정이 필요합니다. 
 * 
 * export const TEMP_POST_LIST: GetPostListResponseType = {
  limit: 12,
  totalCount: 6,
  totalPage: 1,
  currentPage: 1,
  data: [
    {
      id: 9,
      part: 'WEB',
      generation: 29,
      thumbnailUrl:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSUZWn%2Fbtsf4gsXxvD%2FpbaSFQ1k33fGg7ypx8WvBK%2Fimg.jpg',
      title: 'React CleanCode #1, 합성으로 관심사를 분리하기',
      description:
        '서언 안녕하세요. React CleanCode 첫 번째 주제로 Composition(합성)을 다룹니다. 최근에 회사에서 많은 코드를 작성하면서 느끼는 것이 있었는데요. 바로 프론트엔드가 다루어야할 관심사가 너무나 많다는 것입니다. 크게는 UI 로직(단순 UI, 애니메이션 로직, 하드코딩적인 요소), 서버 로직(데이터 패칭, 업데이트 로직, 유저 인증인가 로직, 로딩처리, 에러처리), 로그 등 이 있습니다. React를 사용하며 이러한 관심사를 잘 분리하지 않는다면, 스파게티 코드가 된다는 것을 체감했습니다. 그러면 어떻게 관심사의 지옥에서 벗어날 수 있을까요? 즉 관심사를 어떻게 잘 분리해야 할까요? 관심사 분리는 보통 함수(클래스) 분리를 통해 이루어집니다. React에서 함수의 실체는 훅, 컴포넌트,..',
      author: '김의진',
      authorProfileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/d25ea454-f980-400a-8b43-b35924e17cb0-7112F4F0-F803-40B7-91BD-BD629CE03F4C.jpeg',
      sopticleUrl: 'https://happysisyphe.tistory.com/62',
      uploadedAt: '2023-10-06T12:06:01.002Z',
      likeCount: 2,
      liked: false,
    },
    {
      id: 7,
      part: 'WEB',
      generation: 29,
      thumbnailUrl:
        'https://velog.velcdn.com/images/1106laura/post/a43a5d48-f4a5-45f5-9be5-60e2480f25dd/2022-01-20%2004.41.36.gif',
      title: 'Recoil을 사용하여 커스텀 토스트 훅 만들기',
      description: 'recoil, typescript, styled component를 이용한 커스텀 토스트 훅 만들기',
      author: '김서진',
      authorProfileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/f7e05159-eb47-4830-a6b9-661688e1c4f6-IMG_2984.jpeg',
      sopticleUrl: 'https://velog.io/@1106laura/custom-toast-hook-with-recoil',
      uploadedAt: '2023-09-28T13:22:15.445Z',
      likeCount: 2,
      liked: false,
    },
    {
      id: 6,
      part: 'SERVER',
      generation: 32,
      thumbnailUrl:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcBUhpy%2Fbtsovr8iQhu%2FF8Ip7lTNRcsACOTTe5PwW0%2Fimg.png',
      title: '[GO SOPT] 파이썬과 Mysql 그리고 구글스프레드 시트를 연동하여 기획이랑 소통하는 법',
      description:
        '오늘은 GO SOPT 32기 앱잼을 하며 똑똑하게 기획과 소통하며 프로젝트에서 더미데이터를 쌓을 수 있었던 방법에 대해 기술하려고 한다 사담을 더하자면, 우리 서비스를 요약하자면 건강한 빵집에 대한 정보를 알 수 있고 이 빵집에 대해 리뷰를 남김으로써 다른 사용자와 정보 공유를 할 수 있다 사용했던 기술은 다음과 같다 1. Google Spread Sheet 2. Google API 3. python 4. mysql(AWS의 RDS에 구축했다) 5. chatGPT 1. Google Spread Sheet 기획이 건강한 빵집을 선별하여 필요한 정보를 수집해주었다 서비스에 구축한 데이터베이스에서 필요한 정보 중 이렇게 기획에서 넘겨주어야 할 데이터는 위와 같이 테이블 형태로 미리 양식을 만들어 공유해주었다 ..',
      author: '김성은',
      authorProfileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/0f35c598-dc21-489b-8d7b-b5ca9743d258-증명사진_김성은.jpg',
      sopticleUrl: 'https://fascination-euna.tistory.com/257',
      uploadedAt: '2023-09-16T12:24:41.363Z',
      likeCount: 5,
      liked: false,
    },
    {
      id: 3,
      part: 'WEB',
      generation: 30,
      thumbnailUrl:
        'https://velog.velcdn.com/images/treejy/post/2f717b0f-0254-4f28-9363-84e021e8dd03/image.png',
      title: 'SOPT makers 1기 Playground 팀 FE 개발자들의 KPT 회고 ',
      description: 'SOPT makers 1기 Playground 팀 FE 개발자들의 생생한 회고 기록!',
      author: '남주영',
      authorProfileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/4d0d3f93-f401-46ab-ad1a-307ea4a21bed-2F8EADCA-D14D-48FE-82F9-3D2FDA1A97DA.jpeg',
      sopticleUrl:
        'https://velog.io/@treejy/SOPT-makers-1%EA%B8%B0-Playground-%ED%8C%80-FE-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%93%A4%EC%9D%98-KPT-%ED%9A%8C%EA%B3%A0',
      uploadedAt: '2023-09-03T15:14:11.101Z',
      likeCount: 8,
      liked: false,
    },
    {
      id: 2,
      part: 'PLAN',
      generation: 27,
      thumbnailUrl:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/9dEO/image/jUTvyYARIQneOVRzxBr9Ez2a7zM.png',
      title: '동아리 공식 프로덕트 만들기 : Makers',
      description:
        '지난 1년 동안의 2가지 프로덕트 탄생기와 성장기 짧은 후기글 | 2019년 하반기부터 활동해 오던 SOPT 활동을 Makers에서 마무리하게 되었다. 처음 기획을 배울 수 있게 해 준 활동이자, IT 도메인의 여러 사람들을 만나게 해 준 연결고리 그리고 이후에는 애정으로 참여해 온 동아리인지라 꽤 오랜 기간 몸담고 있었다. 물론 언젠가 멘토로는 참여할 수 있겠지만, 애정으로 참여했던 활동 멤버로서는 이제 막을 내리게 되',
      author: '김나연',
      authorProfileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/be8348c8-6d5c-476d-9e64-d1ef21d8a7b1-스크린샷 2022-11-05 오후 2.03.21.png',
      sopticleUrl: 'https://brunch.co.kr/@ny0303/101',
      uploadedAt: '2023-07-07T09:43:12.193Z',
      likeCount: 21,
      liked: false,
    },
    {
      id: 1,
      part: 'WEB',
      generation: 29,
      thumbnailUrl:
        'https://velog.velcdn.com/images/tekiter/post/5c70c015-696c-4d82-89da-3d2dc413aeb3/image.png',
      title: 'React에서 사용하는 RustPython',
      description: 'RustPython으로 브라우저에서 서버 없이 Python을 실행시켜보자.',
      author: '박건영',
      authorProfileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/45a0271c-895c-427b-9ff2-a2efb4daa7ce-1679161408215.jpg',
      sopticleUrl: 'https://velog.io/@tekiter/react-rustpython',
      uploadedAt: '2023-06-26T11:04:20.252Z',
      likeCount: 17,
      liked: false,
    },
  ],
  hasNextPage: false,
  hasPrevPage: false,
};
 */

interface PostListProps {
  postList: GetPostListResponseType;
}

function PostList({ postList }: PostListProps) {
  return (
    <S.PostList>
      {postList.data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </S.PostList>
  );
}

export default PostList;
