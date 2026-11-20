import { useEffect, useState } from 'react';
import { RecruitScheduleType } from '@src/lib/types/admin';
import { checkIsTimeInRange } from '@src/lib/utils/date';

const MAX_TIMEOUT_MS = 2 ** 31 - 1;

export default function useRecruitmentSchedule(recruitSchedule?: RecruitScheduleType[]) {
  const obRecruitment = recruitSchedule?.find(({ type }) => type === 'OB');
  const ybRecruitment = recruitSchedule?.find(({ type }) => type === 'YB');
  const [now, setNow] = useState(Date.now);

  useEffect(
    function synchronizeRecruitmentClock() {
      const boundaries = [obRecruitment, ybRecruitment]
        .flatMap((recruitment) => {
          const schedule = recruitment?.schedule;
          if (!schedule) return [];

          // 마감 시각까지 지원할 수 있으므로 다음 밀리초에 상태를 전환합니다.
          return [
            Date.parse(schedule.applicationStartTime),
            Date.parse(schedule.applicationEndTime) + 1,
          ];
        })
        .filter(Number.isFinite)
        .sort((first, second) => first - second);
      if (boundaries.length === 0) return;

      let timeout: number | undefined;

      function synchronizeNow() {
        window.clearTimeout(timeout);
        const currentTime = Date.now();
        setNow(currentTime);

        const nextBoundary = boundaries.find((boundary) => boundary > currentTime);
        if (nextBoundary !== undefined) {
          timeout = window.setTimeout(
            synchronizeNow,
            Math.min(nextBoundary - currentTime, MAX_TIMEOUT_MS),
          );
        }
      }

      synchronizeNow();
      document.addEventListener('visibilitychange', synchronizeNow);
      return () => {
        window.clearTimeout(timeout);
        document.removeEventListener('visibilitychange', synchronizeNow);
      };
    },
    [obRecruitment, ybRecruitment],
  );

  const activeRecruitment = [obRecruitment, ybRecruitment].find((recruitment) => {
    const schedule = recruitment?.schedule;
    return (
      schedule &&
      checkIsTimeInRange(schedule.applicationStartTime, schedule.applicationEndTime, now)
    );
  });

  return { activeRecruitment, ybRecruitment, now };
}
