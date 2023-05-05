import Flex from '@src/components/common/Flex';
import { StudyInfoType } from '@src/lib/types/about';
import StudyList from '../List';
import * as St from './style';

type StudySectionProps = {
  studies: StudyInfoType[];
};

const StudySection = (props: StudySectionProps) => {
  return (
    <St.Wrapper>
      <Flex dir="column" gap={{ desktop: 60, tablet: 54, mobile: 36 }}>
        <St.SpanWrapper>
          <St.SpanHighlighted>{props.studies.length}개</St.SpanHighlighted>
          <St.SpanNormal>의 스터디가 주도적으로 진행되었어요</St.SpanNormal>
        </St.SpanWrapper>
        <StudyList studies={props.studies} />
      </Flex>
    </St.Wrapper>
  );
};

export default StudySection;
