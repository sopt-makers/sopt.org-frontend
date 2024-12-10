import { RecruitScheduleType, ScheduleType } from '@src/lib/types/admin';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/style';
import * as S from './style';

const Schedule = ({ info }: { info: RecruitScheduleType[] }) => {
  // TODO: OB, YB 구분 필요. 현재는 OB만
  const { type, schedule } = info[0];
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
        <SectionTitleTranslate>Schedule</SectionTitleTranslate>
        <SectionTitle>모집 일정</SectionTitle>
      </SectionTitleWrapper>
      <S.GridWrapper>
        <S.OddText> {type} 서류 접수</S.OddText>
        <S.EvenText>
          {`${formattedSchedule.applicationStartTime.date} `}
          <S.Highlight>{formattedSchedule.applicationStartTime.hour}</S.Highlight> -
          {` ${formattedSchedule.applicationEndTime.date} `}
          <S.Highlight>{formattedSchedule.applicationEndTime.hour}</S.Highlight>
        </S.EvenText>
        <S.OddText>{type} 서류 결과 발표</S.OddText>
        <S.EvenText>
          {`${formattedSchedule.applicationResultTime.date} `}
          <S.Highlight>{formattedSchedule.applicationResultTime.hour}</S.Highlight>
        </S.EvenText>
        <S.OddText>{type} 면접</S.OddText>
        <S.EvenText>{`${formattedSchedule.interviewStartTime.date} - ${formattedSchedule.interviewEndTime.date}`}</S.EvenText>
        <S.OddText>{type} 최종 결과 발표</S.OddText>
        <S.EvenText>
          {`${formattedSchedule.finalResultTime.date} `}
          <S.Highlight>{formattedSchedule.finalResultTime.hour}</S.Highlight>
        </S.EvenText>
      </S.GridWrapper>
    </S.Wrapper>
  );
};

export default Schedule;
