import Image from 'next/image';
import icProfileDefault from '@src/assets/icons/ic_profile_default.svg';
import * as S from './style';

export default function DefaultProfileImage() {
  return (
    <S.DefaultProfileImage>
      <Image
        src={icProfileDefault}
        alt="작성자 프로필 이미지"
        width={10}
        height={10}
        loading="lazy"
      />
    </S.DefaultProfileImage>
  );
}
