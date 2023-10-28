import * as S from './style';

interface ProjectListCountProps {
  count: number;
}

export default function ProjectListCount({ count }: ProjectListCountProps) {
  return <S.Count>{count}개의 프로젝트</S.Count>;
}
