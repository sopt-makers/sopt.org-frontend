import { ReviewType, TAB } from '@src/views/ReviewPage/types';

export const getReviews = async (tab: TAB): Promise<ReviewType[]> => {
  console.log(tab);
  const { data } = {
    data: [
      {
        id: 1,
        title: '강남역에서 피카츄에게 몸빵 당하다',
        writer: '주함',
        url: 'https://github.com/',
        thumbnail:
          'https://static.wikia.nocookie.net/pokemon/images/3/3c/%EB%9D%BC%EC%9D%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000124&path-prefix=ko',
        semester: 30,
        department: '웹',
        preview: '노란색 염색모의 피카츄 닮은 사람이 몸빵을 하고 지나가는 것이다.',
      },
      {
        id: 2,
        title: '강남역에서 피카츄에게 몸빵 당하다',
        writer: '주함',
        url: 'https://github.com/',
        thumbnail:
          'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko',
        semester: 31,
        department: '안드로이드',
        preview: '노란색 염색모의 피카츄 닮은 사람이 몸빵을 하고 지나가는 것이다.',
      },
      {
        id: 3,
        title: '강남역에서 피카츄에게 몸빵 당하다',
        writer: '주함',
        url: 'https://github.com/',
        thumbnail:
          'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko',
        semester: 31,
        department: '안드로이드',
        preview: '노란색 염색모의 피카츄 닮은 사람이 몸빵을 하고 지나가는 것이다.',
      },
      {
        id: 4,
        title: '강남역에서 피카츄에게 몸빵 당하다',
        writer: '주함',
        url: 'https://github.com/',
        thumbnail:
          'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko',
        semester: 32,
        department: '안드로이드',
        preview: '노란색 염색모의 피카츄 닮은 사람이 몸빵을 하고 지나가는 것이다.',
      },
      {
        id: 5,
        title: '강남역에서 피카츄에게 몸빵 당하다',
        writer: '주함',
        url: 'https://github.com/',
        thumbnail:
          'https://static.wikia.nocookie.net/pokemon/images/5/52/%ED%94%BC%EC%B9%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko',
        semester: 33,
        department: '안드로이드',
        preview: '노란색 염색모의 피카츄 닮은 사람이 몸빵을 하고 지나가는 것이다.',
      },
    ],
  };
  return data;
};
