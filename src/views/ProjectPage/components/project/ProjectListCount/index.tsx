import * as S from './style';

interface ProjectListCountProps {
  count: number;
}

export default function ProjectListCount({ count }: ProjectListCountProps) {
  return (
    <S.Count>
      {count}개<span>의 프로젝트</span>
    </S.Count>
  );
}
