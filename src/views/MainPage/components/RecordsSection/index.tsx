import { useRouter } from 'next/router';
import MoreButton from '@src/components/common/MoreButton';
import SectionLabel from '@src/components/common/SectionLabel';
import { PATHS } from '@src/lib/constants/routes';
import { GetHomepageResponse } from '@src/lib/types/admin';
import RecordList from './RecordList';
import * as S from './style';

interface RecordsSectionProps {
  brandingColor: string;
  generation: number;
  activitiesRecords: GetHomepageResponse['activitiesRecords'];
}

function RecordsSection({ brandingColor, generation, activitiesRecords }: RecordsSectionProps) {
  const router = useRouter();
  const mainColor = '#' + brandingColor;
  return (
    <S.Root>
      <S.Body>
        <S.Content>
          <S.Header>
            <SectionLabel label="Records" color={mainColor} />
            <S.Title>{generation}기 활동 레코드</S.Title>
          </S.Header>
          <RecordList records={activitiesRecords} mainColor={mainColor} />
        </S.Content>
        <MoreButton
          label="이번 기수가 궁금하다면"
          mainColor={mainColor}
          onClick={() => router.push(PATHS.ABOUT)}
        />
      </S.Body>
    </S.Root>
  );
}

export default RecordsSection;
