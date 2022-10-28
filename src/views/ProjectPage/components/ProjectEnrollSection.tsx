import styles from '../styles/project-enroll.module.scss';
import { ReactComponent as RightArrow } from '@src/assets/icons/enroll_rightArrow.svg';

export function ProjectEnrollSection() {
  return (
    <section className={styles.enroll}>
      <p>혹시 SOPT 회원으로 진행한 프로젝트가 있다면?</p>
      <div onClick={() => alert('인터널 프로젝트와 연동 예정')}>
        <span>프로젝트 올리러 가기</span>
        <RightArrow />
      </div>
    </section>
  );
}
