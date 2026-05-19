import * as S from './style';

export type ScheduleItem = {
  date: string;
  name: string;
};

type ScheduleContentProps = {
  schedules: ScheduleItem[];
};

const ScheduleContent = ({ schedules }: ScheduleContentProps) => {
  const mid = Math.ceil(schedules.length / 2);
  const boxes = [schedules.slice(0, mid), schedules.slice(mid)];

  return (
    <S.ScheduleContent>
      {boxes.map((box, boxIdx) => (
        <S.ScheduleBox key={boxIdx}>
          {box.map((item, idx) => (
            <S.ScheduleItem key={idx}>
              <S.ScheduleDate>{item.date}</S.ScheduleDate>
              <S.ScheduleName>{item.name}</S.ScheduleName>
            </S.ScheduleItem>
          ))}
        </S.ScheduleBox>
      ))}
    </S.ScheduleContent>
  );
};

export default ScheduleContent;
