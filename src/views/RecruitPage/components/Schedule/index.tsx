import { useContext } from 'react';
import { RecruitScheduleType } from '@src/lib/types/admin';
import { BrandingColorContext } from '../..';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/style';
import * as S from './style';

const Schedule = ({ info }: { info: RecruitScheduleType }) => {
  const { main } = useContext(BrandingColorContext);
  const { type, schedule } = info;
  const parseDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();

    const formattedDate = `${month}월 ${day}일`;
    const formattedHour = `${hours}시`;
    return { date: formattedDate, hour: formattedHour };
  };
  const formattedSchedule = Object.fromEntries(
    Object.entries(schedule).map(([key, val]) => [key, parseDate(new Date(val))]),
  );
  return (
    <S.Wrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate mainColor={'#' + main}>Schedule</SectionTitleTranslate>
        <SectionTitle>모집 일정</SectionTitle>
      </SectionTitleWrapper>
      <S.GridWrapper>
        <S.OddText> {type} 서류 접수</S.OddText>
        <S.EvenText>
          {`${formattedSchedule.applicationStartTime.date} `}
          <S.Highlight mainColor={'#' + main}>
            {formattedSchedule.applicationStartTime.hour}
          </S.Highlight>{' '}
          -{` ${formattedSchedule.applicationEndTime.date} `}
          <S.Highlight mainColor={'#' + main}>
            {formattedSchedule.applicationEndTime.hour}
          </S.Highlight>
        </S.EvenText>
        <S.OddText>{type} 서류 결과 발표</S.OddText>
        <S.EvenText>
          {`${formattedSchedule.applicationResultTime.date} `}
          <S.Highlight mainColor={'#' + main}>
            {formattedSchedule.applicationResultTime.hour}
          </S.Highlight>
        </S.EvenText>
        <S.OddText>{type} 면접</S.OddText>
        <S.EvenText>{`${formattedSchedule.interviewStartTime.date} - ${formattedSchedule.interviewEndTime.date}`}</S.EvenText>
        <S.OddText>{type} 최종 결과 발표</S.OddText>
        <S.EvenText>
          {`${formattedSchedule.finalResultTime.date} `}
          <S.Highlight mainColor={'#' + main}>{formattedSchedule.finalResultTime.hour}</S.Highlight>
        </S.EvenText>
      </S.GridWrapper>
    </S.Wrapper>
  );
};

export default Schedule;
