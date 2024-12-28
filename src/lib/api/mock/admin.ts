import {
  GetAboutpageResponse,
  GetHomepageResponse,
  GetRecruitpageResponse,
} from '@src/lib/types/admin';

const getRecruitpage = async (): Promise<GetRecruitpageResponse> => ({
  generation: 34,
  name: 'SOPT',
  recruitHeaderImage: 'https://recruit_header.png',
  brandingColor: {
    main: '#FF0000',
    low: '#CC0000',
    high: '#FF3333',
    point: '#FF9999',
  },
  recruitSchedule: [
    {
      type: 'OB',
      schedule: {
        applicationStartTime: '2024-01-01 09:00:00',
        applicationEndTime: '2024-01-31 18:00:00',
        applicationResultTime: '2024-02-01 12:00:00',
        interviewStartTime: '2024-02-05 09:00:00',
        interviewEndTime: '2024-02-05 18:00:00',
        finalResultTime: '2024-02-10 12:00:00',
      },
    },
  ],
  recruitPartCurriculum: [
    {
      part: '기획',
      introduction: {
        content:
          '고객 시장 탐색부터 프로덕트 설계와 운영까지, 더블 다이아몬드 프로세스를 이용하여 더욱 탄탄한 프로덕트를 설계해볼 수 있습니다.',
        preference:
          '- 어려움과 고민을 편하게 나누고 공감할 수 있는 유대감과 열린 마음을 가진 분\n- 타 파트와 협업하며 존중과 신뢰를 바탕으로 원활한 팀워크를 만들어갈 수 있는 분\n- 도전과 성장의 자세로 한계를 두지 않고 앞으로 나아가고자 하는 열정이 있는 분\n- 본인이 가진 지식과 경험을 아낌없이 공유하고, 책임감을 가지고 팀 활동에 임할 수 있는 분',
      },
    },
    {
      part: '디자인',
      introduction: {
        content:
          'UX 설계, UI, GUI, 브랜딩, 인터랙션 디자인 등 프로덕트 디자인의 전 과정을 학습하며 기획자, 개발자와의 체계적인 협업 방식을 통해 문제의 근원을 주도적으로 해결합니다.',
        preference:
          '- 어려움과 고민을 편하게 나누고 공감할 수 있는 유대감과 열린 마음을 가진 분\n- 타 파트와 협업하며 존중과 신뢰를 바탕으로 원활한 팀워크를 만들어갈 수 있는 분\n- 도전과 성장의 자세로 한계를 두지 않고 앞으로 나아가고자 하는 열정이 있는 분\n- 본인이 가진 지식과 경험을 아낌없이 공유하고, 책임감을 가지고 팀 활동에 임할 수 있는 분',
      },
    },
    {
      part: '웹',
      introduction: {
        content:
          'React를 활용한 웹 서비스 개발을 기초부터 심화까지 학습하며, 협업 과정에서는 기획자, 디자이너, 서버 개발자와의 원활한 소통 방법을 배웁니다. 이를 통해 최종적으로 자신만의 웹 서비스를 출시하는 것을 목표로 합니다.',
        preference:
          '- 어려움과 고민을 편하게 나누고 공감할 수 있는 유대감과 열린 마음을 가진 분\n- 타 파트와 협업하며 존중과 신뢰를 바탕으로 원활한 팀워크를 만들어갈 수 있는 분\n- 도전과 성장의 자세로 한계를 두지 않고 앞으로 나아가고자 하는 열정이 있는 분\n- 본인이 가진 지식과 경험을 아낌없이 공유하고, 책임감을 가지고 팀 활동에 임할 수 있는 분',
      },
    },
    {
      part: '서버',
      introduction: {
        content: '설계와 의사소통을 배우며, Spring framework 로 application 을 구현합니다.',
        preference:
          '- 어려움과 고민을 편하게 나누고 공감할 수 있는 유대감과 열린 마음을 가진 분\n- 타 파트와 협업하며 존중과 신뢰를 바탕으로 원활한 팀워크를 만들어갈 수 있는 분\n- 도전과 성장의 자세로 한계를 두지 않고 앞으로 나아가고자 하는 열정이 있는 분\n- 본인이 가진 지식과 경험을 아낌없이 공유하고, 책임감을 가지고 팀 활동에 임할 수 있는 분',
      },
    },
    {
      part: 'iOS',
      introduction: {
        content:
          'UIKit & SwiftUI를 활용한 앱 개발을 진행하며 본인의 프로젝트를 직접 기획하고 개발하는 경험을 얻습니다.',
        preference:
          '- 어려움과 고민을 편하게 나누고 공감할 수 있는 유대감과 열린 마음을 가진 분\n- 타 파트와 협업하며 존중과 신뢰를 바탕으로 원활한 팀워크를 만들어갈 수 있는 분\n- 도전과 성장의 자세로 한계를 두지 않고 앞으로 나아가고자 하는 열정이 있는 분\n- 본인이 가진 지식과 경험을 아낌없이 공유하고, 책임감을 가지고 팀 활동에 임할 수 있는 분',
      },
    },
    {
      part: '안드로이드',
      introduction: {
        content:
          'Kotlin을 활용해 UI 구현 및 서버 통신 등 안드로이드 개발에 대한 전반적인 지식을 학습하며, 기획, 디자인, 서버 파트와의 협업을 통해 열정이 담긴 IT 서비스를 출시하는 경험을 할 수 있습니다.',
        preference:
          '- 어려움과 고민을 편하게 나누고 공감할 수 있는 유대감과 열린 마음을 가진 분\n- 타 파트와 협업하며 존중과 신뢰를 바탕으로 원활한 팀워크를 만들어갈 수 있는 분\n- 도전과 성장의 자세로 한계를 두지 않고 앞으로 나아가고자 하는 열정이 있는 분\n- 본인이 가진 지식과 경험을 아낌없이 공유하고, 책임감을 가지고 팀 활동에 임할 수 있는 분',
      },
    },
  ],
  recruitQuestion: [
    {
      part: '기획',
      questions: [
        {
          question: '서비스 기획에 대한 경험과 경력이 없어도 괜찮을까요?',
          answer:
            '기획 파트에서는 자신의 아이디어를 발전시키고, 팀과 협업하며 성장할 수 있는 열정과 의지가 중요합니다. 총 8번의 세미나를 통해 기획에 대해 학습하고, 타 파트와 협업해볼 수 있는 기회가 제공되니, 기획에 대한 관심과 열정이 있다면, 누구나 지원 가능합니다.',
        },
        {
          question: '포트폴리오는 필수인가요?',
          answer: '포트폴리오는 필수가 아닌 선택사항입니다. 제출 여부에 따른 불이익은 없습니다.',
        },
        {
          question: '개발지식이 필요한가요?',
          answer:
            '기획파트에서는 개발지식에 대한 이해도보다, 본인이 관심있는 시장에 대한 이해도를 더 중요시합니다. 개발지식은 미니 세미나 혹은 스터디를 통해 충분이 다뤄질 것이므로 개발지식에 대한 걱정은 하지 않으셔도 됩니다.',
        },
      ],
    },
    {
      part: '디자인',
      questions: [
        {
          question: '디자인 경험이 없는데 지원해도 되나요?',
          answer:
            '이번 35기에는 UX설계, UI, GUI, 브랜딩, 인터랙션 디자인까지 프로덕트 디자인의 전반적인 과정을 모두 알려드릴 예정입니다. 디자인에 대한 열정을 가지고 끝까지 노력할 수 있다면, 누구나 지원 가능합니다.',
        },
        {
          question: '함께하고 싶은 디자이너는 어떤 모습인가요?',
          answer:
            '디자인 파트는 다른 직군과의 협업이 가장 많은 파트입니다. 실력적인 면도 중요하지만, 다른 디자이너, 기획자, 개발자와 원활한 커뮤니케이션이 가능한 디자이너와 함께하고 싶습니다. 타인의 피드백을 두려워하지 않는 열린 마음을 가지신 분은 정말 환영입니다!',
        },
        {
          question: '어떤 디자인 툴을 사용하나요?',
          answer:
            '기획자, 개발자와의 협업을 위한 툴인 Figma를 주로 사용합니다. 그리고 그래픽 작업 시에는 Adobe Illustrator, Adobe Photoshop와 3D 그래픽을 위한 Cinema 4D, Blender 등을 사용할 예정입니다. 그리고 프로토타이핑 툴로 Protopie도 사용할 예정이니, 미리 설치해 두시면 좋습니다.',
        },
      ],
    },
    {
      part: '안드로이드',
      questions: [
        {
          question:
            '안드로이드 핸드폰을 사용하고 있지 않은데 지원이 가능한가요? 맥북을 사용하고 있는데 지원이 가능한가요?',
          answer:
            '가능합니다! 안드로이드 핸드폰이나 공기계가 없어도 가상 디바이스를 통해 본인이 개발한 앱을 확인해볼 수 있습니다. 또한, MacOS 환경에서의 안드로이드 개발도 가능합니다.',
        },
        {
          question: '개발 경험이 없는데 지원해도 되나요?',
          answer:
            '물론입니다! 안드로이드 개발에 대한 흥미와 배우고자 하는 열정을 가지고 계신다면 주저말고 지원해주세요. 총 8번의 정규 세미나와 미니 세미나 등을 통해 안드로이드 기초 지식부터 함께 배워가며 하나의 서비스를 완성하는 안드로이드 개발자로 성장할 수 있습니다.',
        },
        {
          question: '어떤 UI 기술 스택을 사용해 세미나를 진행하나요?',
          answer:
            '35기 안드로이드 파트의 정규 세미나에서는 Jetpack Compose를 활용하여 UI를 구현하는 방법을 배웁니다. 하지만 XML을 아예 다루지 않는 것은 아닙니다. 미니 세미나를 통해 XML을 활용해 UI를 구현하는 방법을 소개할 예정입니다.',
        },
      ],
    },
    {
      part: 'iOS',
      questions: [
        {
          question: '맥북이 필수인가요?',
          answer:
            'iOS 앱 개발을 위해 Swift로 세미나를 진행합니다. 이를 위해서는 맥북이 필수입니다!',
        },
        {
          question: '개발 경험이 아예 없는데 지원해도 되나요?',
          answer:
            '매주 세미나를 통해 iOS의 기본부터 함께 배워가기 때문에, 개발경험은 상관이 없습니다. 하고자 하는 열정이 가장 중요한 요소라고 생각합니다.',
        },
        {
          question: '어떤 기술로 UI를 구현하나요?',
          answer: '이번 iOS 파트는 UIKit과 SwiftUI를 활용한 앱 개발을 진행합니다.',
        },
      ],
    },
    {
      part: '웹',
      questions: [
        {
          question: '개발 실력이 부족한데 지원해도 되나요?',
          answer:
            '물론입니다! 웹 개발에 대한 열정과 끈기, 그리고 성장하고자 하는 의지만 있다면 충분합니다. 함께 배우고 성장하는 과정에서 실력을 키워나가실 수 있습니다.',
        },
        {
          question: '세미나 진행은 어떻게 되나요?',
          answer:
            '웹 프론트엔드 개발을 학습하는 8주간의 정기 세미나가 진행됩니다. 실습과 다양한 과제가 함께하는 세미나를 통해, 프론트엔드 개발에 필요한 역량을 체계적으로 쌓을 수 있습니다. 자세한 내용은 35기 커리큘럼을 참고해 주세요!',
        },
        {
          question: '어떤 스터디가 있나요?',
          answer:
            '대표적으로 React, JavaScript, TypeScript, 그리고 웹 심화 스터디가 개설됩니다. 이 외에도 자신이 원하는 스터디를 자유롭게 개설하고 진행할 수 있습니다.',
        },
      ],
    },
    {
      part: '서버',
      questions: [
        {
          question: '어떤 언어로 진행되나요?',
          answer:
            '세미나는 java 로 진행됩니다. 다만 언어적 장벽은 없어 지원 및 학습에는 제한이 없습니다.',
        },
        {
          question: '세미나는 어떻게 진행되나요?',
          answer:
            '요구사항 분석과 팀워크를 다지고, 개발 기본에 집중해 프로젝트를 완성할 수 있도록 진행할 예정입니다.',
        },
        {
          question: '개발 경험이 없는데 지원해도 되나요?',
          answer: '경험은 상관없으나, 끝까지 따라오실 수 있는 분을 환영합니다.',
        },
      ],
    },
  ],
});

const getAboutpage = async (): Promise<GetAboutpageResponse> => ({
  generation: 34,
  name: 'SOPT',
  headerImage:
    'https://s3.ap-northeast-2.amazonaws.com/sopt.org/admin/origin/about/35th/header_fix.png',
  brandingColor: {
    main: '#FF0000',
    low: '#CC0000',
    high: '#FF3333',
    point: '#FF9999',
  },
  coreValue: [
    {
      value: '용기',
      description: '새로운 도전을 위해 과감히 용기내는 사람',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/admin/origin/about/35th/%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%80%E1%85%B5_1.png',
    },
    {
      value: '몰입',
      description: '포기하지 않고 깊이 몰입하는 사람',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/admin/origin/about/35th/%E1%84%86%E1%85%A9%E1%86%AF%E1%84%8B%E1%85%B5%E1%86%B8_1.png',
    },
    {
      value: '화합',
      description: '서로를 배려하며 함께 화합하는 사람',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/admin/origin/about/35th/%E1%84%92%E1%85%AA%E1%84%92%E1%85%A1%E1%86%B8_1.png',
    },
  ],
  partCurriculum: [
    {
      part: '기획',
      curriculums: [
        '기획 1주차',
        '기획 2주차',
        '기획 3주차',
        '기획 4주차',
        '기획 5주차',
        '기획 6주차',
        '기획 7주차',
        '기획 8주차',
      ],
    },
    {
      part: '디자인',
      curriculums: [
        '디자인 1주차',
        '디자인 2주차',
        '디자인 3주차',
        '디자인 4주차',
        '디자인 5주차',
        '디자인 6주차',
        '디자인 7주차',
        '디자인 8주차',
      ],
    },
    {
      part: '웹',
      curriculums: [
        '웹 1주차',
        '웹 2주차',
        '웹 3주차',
        '웹 4주차',
        '웹 5주차',
        '웹 6주차',
        '웹 7주차',
        '웹 8주차',
      ],
    },
    {
      part: '서버',
      curriculums: [
        '서버 1주차',
        '서버 2주차',
        '서버 3주차',
        '서버 4주차',
        '서버 5주차',
        '서버 6주차',
        '서버 7주차',
        '서버 8주차',
      ],
    },
    {
      part: 'iOS',
      curriculums: [
        'iOS 1주차',
        'iOS 2주차',
        'iOS 3주차',
        'iOS 4주차',
        'iOS 5주차',
        'iOS 6주차',
        'iOS 7주차',
        'iOS 8주차',
      ],
    },
    {
      part: '안드로이드',
      curriculums: [
        '안드로이드 1주차',
        '안드로이드 2주차',
        '안드로이드 3주차',
        '안드로이드 4주차',
        '안드로이드 5주차',
        '안드로이드 6주차',
        '안드로이드 7주차',
        '안드로이드 8주차',
      ],
    },
  ],
  member: [
    {
      name: '정건',
      role: '회장',
      affiliation: '건국대학교, 티키',
      introduction: '동아리, 그 이상의 가치',
      profileImage: '/images/members/1.png',
      sns: {
        email: 'president@sopt.org',
        linkedin: 'https://www.linkedin.com/in/건-정-4aa699303/?trk=public-profile-join-page',
      },
    },
    {
      name: '김송이',
      role: '부회장',
      affiliation: '아주대학교',
      introduction: '빛나는 열정을 펼칠 수 있도록',
      profileImage: '/images/members/12.png',
      sns: {
        email: 'v_president@sopt.org',
      },
    },
    {
      name: '윤영서',
      role: '총무',
      affiliation: '동국대학교, doorip',
      introduction: '열정을 쏟을 이곳에서 동료들과',
      profileImage: '/images/members/2.png',
      sns: {
        email: 'manager@sopt.org',
        github: 'https://github.com/0seoYun',
      },
    },
    {
      name: '이현진',
      role: '운영 팀장',
      affiliation: '가톨릭대학교, dateroad',
      introduction: '매 순간을 소중한 추억으로!',
      profileImage: '/images/members/5.png',
      sns: {
        email: 'master@sopt.org',
        github: 'https://github.com/2hyunjinn',
      },
    },
    {
      name: '방민지',
      role: '미디어 팀장',
      affiliation: 'PINGLE',
      introduction: '우리의 발자취를 기록하다.',
      profileImage: '/images/members/4.png',
      sns: {
        email: 'media@sopt.org',
        github: 'https://github.com/bangMinjI98',
      },
    },
    {
      name: '김가연',
      role: '메이커스 팀장',
      affiliation: '이화여자대학교, OFFROAD',
      introduction: 'SOPT다움을 찾아서',
      profileImage: '/images/members/3.png',
      sns: {
        email: 'makers@sopt.org',
      },
    },
    {
      name: '김소희',
      role: '기획',
      affiliation: '성신여자대학교',
      introduction: '함께라면, 어떤 꿈도 현실이 됩니다',
      profileImage: '/images/members/6.png',
      sns: {
        email: 'plan@sopt.org',
      },
    },
    {
      name: '송예솔',
      role: '디자인',
      affiliation: 'Lecue, 선약',
      introduction: '세상을 바꾸는 디자이너들',
      profileImage: '/images/members/7.png',
      sns: {
        email: 'design@sopt.org',
        behance: 'https://www.behance.net/208a08e8',
      },
    },
    {
      name: '배지현',
      role: '안드로이드',
      affiliation: '건빵, PINGLE, dateroad',
      introduction: '함께의 힘을 믿습니다.',
      profileImage: '/images/members/8.png',
      sns: {
        email: 'develop@sopt.org',
        github: 'https://github.com/jihyunniiii',
      },
    },
    {
      name: '한지석',
      role: 'iOS',
      affiliation: '수원대학교, Recordy',
      introduction: '나는 더 나은 미래를 위해 싸운다',
      profileImage: '/images/members/9.png',
      sns: {
        email: 'develop@sopt.org',
        github: 'https://github.com/sozohoy',
      },
    },
    {
      name: '유태승',
      role: '웹',
      affiliation: '건국대학교, PICKPLE',
      introduction: '저와 함께 도약할 준비 되셨나요?',
      profileImage: '/images/members/10.png',
      sns: {
        email: 'develop@sopt.org',
        github: 'https://github.com/gudusol',
      },
    },
    {
      name: '계대환',
      role: '서버',
      affiliation: 'smeem',
      introduction: '부드럽고, 성실하고, 능숙하게',
      profileImage: '/images/members/11.png',
      sns: {
        email: 'develop@sopt.org',
      },
    },
  ],
});

const getHomepage = async (): Promise<GetHomepageResponse> => ({
  generation: 34,
  name: 'SOPT',
  brandingColor: {
    main: '#FF0000',
    low: '#CC0000',
    high: '#FF3333',
    point: '#FF9999',
  },
  mainButton: {
    text: '지원하기',
    keyColor: '#FF0000',
    subColor: '#CC0000',
  },
  partIntroduction: [
    {
      part: '안드로이드',
      description: 'Android 앱 개발',
    },
  ],
  latestNews: [
    {
      id: 36,
      title: 'MIND 23',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/develop/news/a906be00-0b6e-4ca6-bedc-69cc734f4318_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%AD%E1%86%BC.png',
      link: 'https://disquiet.io/product/mind-23-%EC%98%A4%EB%8A%98%EB%8F%84-%EB%A9%88%EC%B6%94%EC%A7%80-%EC%95%8A%EB%8A%94-it%EC%9D%B8%EB%93%A4',
    },
    {
      id: 40,
      title: 'WUZOO',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/develop/news/3a3df4a9-c7f4-48ce-a9af-14a62a139c77_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%AD%E1%86%BC.png',
      link: '',
    },
    {
      id: 41,
      title: 'WUZOO',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/develop/news/298cf8d3-0d17-4e71-919f-b70baaa260ec_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%AD%E1%86%BC.png',
      link: '',
    },
    {
      id: 42,
      title: 'wuzoo',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/develop/news/781d5e93-d98b-4a7b-a2d7-b20a4473c2d4_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%AD%E1%86%BC.png',
      link: '',
    },
    {
      id: 43,
      title: 'wuzoo',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/sopt.org/develop/news/500642d1-727f-4041-9935-f472e3913b79_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%AD%E1%86%BC.png',
      link: '',
    },
  ],
});

export const mockAdminAPI = {
  getRecruitpage,
  getAboutpage,
  getHomepage,
};
