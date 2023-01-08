import styles from './detailed-information.module.scss';

const cardList = [
  {
    name: '프로젝트',
    desc: 'SOPT에서 진행된 다양한 프로젝트',
  },
  {
    name: 'FAQ',
    desc: 'SOPT에 대해 자주 묻는 질문',
  },
  {
    name: 'Youtube',
    desc: 'SOPT 활동 스케치 및 자체콘텐츠',
  },
];

export function DetailedInformation() {
  return (
    <section>
      <h3>SOPT는 총 6개의 파트로 이루어져 있어요.</h3>
      <div>
        {cardList.map(({ name, desc }) => {
          return (
            <article key={name}>
              <h4>{name}</h4>
              <p>{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
