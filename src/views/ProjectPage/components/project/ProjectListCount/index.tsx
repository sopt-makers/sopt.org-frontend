import { useMediaQuery } from 'react-responsive';
import * as S from './style';

interface ProjectListCountProps {
  count: number;
}

export default function ProjectListCount({ count }: ProjectListCountProps) {
  const isTablet = useMediaQuery({ query: '(min-width: 900px) and (max-width: 1279px)' });

  return (
    <S.Count>
      {count}개{!isTablet && '의 프로젝트'}
    </S.Count>
  );
}
