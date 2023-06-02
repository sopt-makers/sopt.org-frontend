import NullImage from '@src/assets/images/null_image.png';
import { MemberType } from '@src/lib/types/about';

export const emptyMembers = (count: number): MemberType[] => {
  return Array.from({ length: count }).map((_, idx) => ({
    id: idx,
    name: '-',
    description: '-',
    part: '-',
    src: NullImage.src,
  }));
};
