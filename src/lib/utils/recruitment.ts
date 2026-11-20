import { ScheduleType } from '@src/lib/types/admin';

export function getNotificationRecruitment(
  generation: number,
  now: number,
  ybSchedule?: ScheduleType,
) {
  const endTime = new Date(ybSchedule?.applicationEndTime ?? '').getTime();
  const hasEnded = now > endTime;
  const targetGeneration = hasEnded ? generation + 1 : generation;
  const startTime = new Date(ybSchedule?.applicationStartTime ?? '').getTime();
  const month =
    !hasEnded && Number.isFinite(startTime)
      ? new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: 'Asia/Seoul' }).format(
          startTime,
        )
      : String(targetGeneration % 2 === 0 ? 3 : 9);

  return { generation: targetGeneration, month };
}
