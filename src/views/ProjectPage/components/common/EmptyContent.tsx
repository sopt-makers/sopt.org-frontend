import cc from 'classcat';

import styles from './empty.module.scss';
import { ReactComponent as Circle } from '@src/assets/icons/circle.svg';
import { ReactComponent as Diagonal } from '@src/assets/icons/diagonal.svg';
import { ReactComponent as Triangle } from '@src/assets/icons/triangle.svg';

export function EmptyContent() {
  return (
    <section className={cc([styles.blank])}>
      <div className={cc([styles.contour])}>
        <Circle />
        <Triangle />
        <Diagonal />
        <Circle />
        <Triangle />
        <Diagonal />
        <Circle />
        <Triangle />
        <Diagonal />
      </div>
      <p>아직 올라온 프로젝트가 없어요.</p>
      <div className={cc([styles.contour])}>
        <Circle />
        <Triangle />
        <Diagonal />
        <Circle />
        <Triangle />
        <Diagonal />
        <Circle />
        <Triangle />
        <Diagonal />
      </div>
    </section>
  );
}
