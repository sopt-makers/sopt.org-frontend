import { ReactComponent as IcEllipseGreen } from '@src/assets/icons/ic_ellipse_green.svg';
import * as S from './style';

interface ServiceInfoProps {
  text: string;
}

export default function ServiceInfo({ text }: ServiceInfoProps) {
  return (
    <S.Info>
      <IcEllipseGreen />
      <span>{text}</span>
    </S.Info>
  );
}
