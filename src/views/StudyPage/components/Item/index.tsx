import Image from 'next/image';
import { useMemo } from 'react';
import Flex from '@src/components/common/Flex';
import { StudyInfoType } from '@src/lib/types/about';
import { formatDate } from '@src/utils/dateFormat';
import { parsePartToKorean } from '@src/views/MainPage/components/ActivityReview/utils/parsePartToKorean';
import * as St from './style';

type StudyItemProps = {
  study: StudyInfoType;
};

const StudyItem = (props: StudyItemProps) => {
  return (
    <Flex dir="column" gap={{ desktop: 20, tablet: 24, mobile: 14 }}>
      <St.CardWrapper>
        <Image src={props.study.src} alt={props.study.title} fill />
        <Flex dir="row" gap={6} style={{ position: 'relative', flexWrap: 'wrap' }}>
          <St.ChipHighlighted>{props.study.generation}기</St.ChipHighlighted>
          {props.study.joinableParts.map((part) => (
            <St.ChipNormal key={part}>{parsePartToKorean(part)}</St.ChipNormal>
          ))}
        </Flex>
      </St.CardWrapper>
      <St.DescriptionWrapper>
        <St.Title>{props.study.title}</St.Title>
        <div>
          <StudyDateSection startDate={props.study.startDate} endDate={props.study.endDate} />
          <St.SpanWrapper>
            <St.SpanHighlighted>{props.study.membersCount}명</St.SpanHighlighted>
            <St.SpanNormal>과 함께했어요</St.SpanNormal>
          </St.SpanWrapper>
        </div>
      </St.DescriptionWrapper>
    </Flex>
  );
};

type StudyDateSectionProps = {
  startDate: Date;
  endDate: Date;
};
const StudyDateSection = (props: StudyDateSectionProps) => {
  const isSameYear = useMemo(
    () => props.startDate.getFullYear() === props.endDate.getFullYear(),
    [props.startDate, props.endDate],
  );
  const startDateString = useMemo(() => formatDate(props.startDate, 'yyyymmdd'), [props.startDate]);

  const endDateString = useMemo(
    () => formatDate(props.endDate, isSameYear ? 'mmdd' : 'yyyymmdd'),
    [props.endDate, isSameYear],
  );

  return (
    <St.SpanNormal>
      {startDateString} ~ {endDateString}
    </St.SpanNormal>
  );
};

export default StudyItem;
