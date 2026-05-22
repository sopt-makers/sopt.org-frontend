import { ActivityScheduleItemType } from '@src/lib/types/admin';
import * as S from './style';

type ScheduleContentProps = {
  schedules: ActivityScheduleItemType[];
};

const formatDate = (startDate: string, endDate: string | null): string => {
  const start = new Date(startDate);
  const startMonth = start.getMonth() + 1;
  const startDay = start.getDate();

  if (!endDate) return `${startMonth}월 ${startDay}일`;

  const end = new Date(endDate);
  const endMonth = end.getMonth() + 1;
  const endDay = end.getDate();

  if (startMonth === endMonth) return `${startMonth}월 ${startDay}~${endDay}일`;
  return `${startMonth}월 ${startDay}일 ~ ${endMonth}월 ${endDay}일`;
};

const ITEMS_PER_COLUMN = 8;

const ScheduleContent = ({ schedules }: ScheduleContentProps) => {
  const boxes = [schedules.slice(0, ITEMS_PER_COLUMN), schedules.slice(ITEMS_PER_COLUMN)];

  return (
    <S.ScheduleContent>
      {boxes.map((box, boxIdx) => (
        <S.ScheduleBox key={boxIdx}>
          {box.map((item, idx) => (
            <S.ScheduleItem key={idx}>
              <S.ScheduleDate>{formatDate(item.startDate, item.endDate)}</S.ScheduleDate>
              <S.ScheduleName>{item.name}</S.ScheduleName>
            </S.ScheduleItem>
          ))}
        </S.ScheduleBox>
      ))}
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
