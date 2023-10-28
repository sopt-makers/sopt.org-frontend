import { useIsTablet } from '@src/hooks/useDevice';
import * as S from './style';

interface ProjectListCountProps {
  count: number;
}

export default function ProjectListCount({ count }: ProjectListCountProps) {
  const isTablet = useIsTablet('900px', '1279px');

  return (
    <S.Count>
      {count}개{!isTablet && '의 프로젝트'}
    </S.Count>
  );
}
