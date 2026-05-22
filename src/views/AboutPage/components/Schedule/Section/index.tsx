import { ActivityScheduleItemType } from '@src/lib/types/admin';
import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import ScheduleContent from '../Content';
import * as S from './style';

type ScheduleSectionProps = {
  generation: number;
  schedules: ActivityScheduleItemType[];
};

const ScheduleSection = ({ generation, schedules }: ScheduleSectionProps) => {
  return (
    <S.ScheduleSection>
      <SectionTop engTitle="Schedule" korTitle={`${generation}기 전체 일정`} />
      <ScheduleContent schedules={schedules} />
    </S.ScheduleSection>
  );
};

export default ScheduleSection;
