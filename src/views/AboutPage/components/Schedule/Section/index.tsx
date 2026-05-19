import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import ScheduleContent, { ScheduleItem } from '../Content';
import * as S from './style';

type ScheduleSectionProps = {
  generation: number;
  schedules: ScheduleItem[];
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
