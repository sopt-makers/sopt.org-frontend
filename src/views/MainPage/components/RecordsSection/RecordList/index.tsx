import { GetHomepageResponse } from '@src/lib/types/admin';
import Record from '../Record';
import * as S from './style';

type ActivitiesRecords = GetHomepageResponse['activitiesRecords'];

const RECORD_ITEMS: { key: keyof ActivitiesRecords; unit: string; label: string }[] = [
  { key: 'operationPeriod', unit: '년', label: '운영 기간' },
  { key: 'activitiesMemberCount', unit: '+', label: '활동 회원 수' },
  { key: 'foundingTeamCount', unit: '+', label: '창업 중인 팀' },
  { key: 'availableServiceCount', unit: '+', label: '이용 가능 서비스' },
];

interface RecordListProps {
  records: ActivitiesRecords;
  mainColor: string;
}

function RecordList({ records, mainColor }: RecordListProps) {
  return (
    <S.Root>
      {RECORD_ITEMS.map(({ key, unit, label }) => (
        <Record key={key} value={records[key]} unit={unit} label={label} mainColor={mainColor} />
      ))}
    </S.Root>
  );
}

export default RecordList;
