import { StudyInfoType } from '@src/lib/types/about';
import StudyItem from '../Item';
import { GridWrapper } from './style';

type StudyListProps = {
  studies: StudyInfoType[];
};

const StudyList = (props: StudyListProps) => {
  return (
    <GridWrapper>
      {props.studies.map((study) => (
        <StudyItem key={study.id} study={study} />
      ))}
    </GridWrapper>
  );
};

export default StudyList;
