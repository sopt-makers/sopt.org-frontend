import Image from 'next/image';
import icEllipseGreen from '@src/assets/icons/ic_ellipse_green.svg';
import * as S from './style';

interface ServiceInfoProps {
  text: string;
}

export default function ServiceInfo({ text }: ServiceInfoProps) {
  return (
    <S.Info>
      <Image src={icEllipseGreen} alt="" width={5} height={5} />
      <span>{text}</span>
    </S.Info>
  );
}
