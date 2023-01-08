import styles from './part-description.module.scss';

const partList = [
  {
    part: '기획',
    content:
      '린스타트업에 기초해 문제 정의 - 검증 - 솔루션 도출 - 전략 설정까지 IT 프로덕트를 기획하고 문제를 해결해 가는 전과정을 경험해요.',
  },
  {
    part: '디자인',
    content:
      '사용자와 서비스의 사용성을 위해 UX/UI를 이해하고, 사용자 경험과 서비스 전반의 시각적 요소를 디자인해요.',
  },
  {
    part: 'Android',
    content:
      '기존 문제점들을 기술적으로 해결하고자 하는 생각을 기반으로 사용자(고객)을 위한 안드로이드 어플리케이션을 개발해요.',
  },
  {
    part: 'iOS',
    content:
      '삶을 더 좋은 방향으로 변화시킬 아이디어들을 앱 서비스로 구현해 iOS 사용자들의 삶에 전달해요.',
  },
  {
    part: 'Web',
    content: '서비스의 사용성과 접근성을 위해 데이터를 관리하고 가공하여 웹뷰를 개발해요.',
  },
  {
    part: 'Server',
    content: '서비스를 안정적이고 효율적으로 운영할 수 있도록 서버와 데이터베이스를 만들어요.',
  },
];

export function PartDescription() {
  return (
    <section>
      <h3>SOPT는 총 6개의 파트로 이루어져 있어요.</h3>
      <h5>*2022년 하반기 31기 기준</h5>
      <div>
        <ul>
          {partList.map(({ part }) => {
            return <li key={part}>{part}</li>;
          })}
        </ul>
        <article>selected article content</article>
      </div>
    </section>
  );
}
