import cc from 'classcat';
import styles from './utility.module.scss';
import { ReactComponent as UpArrow } from '@src/views/ProjectPage/assets/icon/arrow-up-24x24.svg';

export function DesktopUtilityButtons() {
  return (
    <div
      className={cc({
        [styles['desktop-utility']]: true,
      })}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span>UP</span>
      <UpArrow />
    </div>
  );
}
