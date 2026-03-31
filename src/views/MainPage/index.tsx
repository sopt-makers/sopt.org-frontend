import { useDialog } from '@sopt-makers/ui';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetHomepageResponse } from '@src/lib/types/admin';
import BottomLayout from '@src/views/MainPage/components/BottomLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import TopBanner from '@src/views/MainPage/components/TopBanner';
import usePostVisitor from '@src/views/MainPage/hooks/usePostVisitor';
import { checkIsTimeInRange } from '../../lib/utils/date';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';

function MainPage() {
  const { data: adminData } = useQuery<GetHomepageResponse>({
    queryKey: ['homepage'],
    queryFn: remoteAdminAPI.getHomepage,
  });

  const { open, close } = useDialog();

  const isOBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[0].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[0].schedule.applicationEndTime ?? '',
  );
  const isYBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[1].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[1].schedule.applicationEndTime ?? '',
  );
  const isRecruiting = isOBRecruiting || isYBRecruiting;
  const isRecruitEnd =
    Date.now() >
    new Date(adminData?.recruitSchedule[1].schedule.applicationEndTime ?? '').getTime();

  const ctaText = useMemo(() => {
    if (adminData?.generation === undefined) return '모집 알림 신청하기 ';
    if (isOBRecruiting) return `${adminData.generation}기 OB 지원하기 `;
    if (isYBRecruiting) return `${adminData.generation}기 YB 지원하기 `;
    return '모집 알림 신청하기 ';
  }, [isOBRecruiting, isYBRecruiting, adminData]);

  const postVisiter = usePostVisitor();

  useEffect(() => {
    if (!isRecruiting) return;
    postVisiter();
  }, [isRecruiting, postVisiter]);

  useEffect(() => {
    open({
      title: '개인정보 보안 사고 안내',
      description: (
        <p style={{ whiteSpace: 'pre-line' }}>
          {`안녕하세요, SOPT 지원 서버 운영팀입니다.
            이번에 저희 어드민 서버의 보안 취약점으로 인해 지원자분들의 개인정보가 노출되었을 가능성이 있어 안내드립니다.
            
            [ 사고 개요 ]
            인가되지 않은 외부인의 비정상적인 접근으로 인해 어드민 계정이 탈취될 경우, 이를 통해 지원자 정보 열람 및 합격 여부 변경이 가능한 상태였음이 확인되었습니다.
            어드민 계정에 대한 접근 시도가 약 2,000회 확인되었으며, 로그 수집이 이루어지지 않아 정확한 피해 범위를 특정하기 어려운 상황입니다. 저장된 개인정보(이름, 이메일, 전화번호, 학교, 학과, 가까운 역, 주소 등) 전체가 영향 받았을 가능성을 열어두고 최대 범위로 안내드립니다.
            다만 실제 합격 여부 데이터의 변조는 확인되지 않았습니다. 또한, 사용자 비밀번호는 평문 저장 없이 salt 기반 해싱으로 저장되어 있어 비밀번호 자체의 유출 가능성은 극히 낮습니다.

            [ 현재까지 취한 조치 ]
            취약점이 있는 어드민 서비스 즉시 차단
            서비스 운영 데이터 전체 삭제 (백업 보존)
            현재 서비스 접근 제한 조치 진행 중

            [ 향후 보안 강화 계획 ]
            Google OAuth 도입으로 sopt.org 계정을 보유한 임원진만 가입 가능하도록 변경
            기수 교체 시 이전 기수 임원진의 접근 권한 회수 체계 적용
            역할 기반 인가(Authorization) 체계 도입으로 권한별 기능 접근 제한
            서버 접근 로그 수집 체계 구축

            지원자분들의 소중한 개인정보를 안전하게 보호하지 못한 점에 대해 진심으로 사과드립니다. 유사한 사고가 재발하지 않도록 최선을 다하겠습니다.
            감사합니다. 
            SOPT 운영팀
            `}
        </p>
      ),
      type: 'single',
      typeOptions: {
        approveButtonText: '확인',
        onApprove: () => close(),
      },
    });
  }, []);

  if (!adminData) return;
  return (
    <PageLayout>
      {isRecruiting && (
        <TopBanner
          targetTime={
            isYBRecruiting
              ? adminData.recruitSchedule[1].schedule.applicationEndTime
              : adminData.recruitSchedule[0].schedule.applicationEndTime
          }
          generation={adminData.generation ?? 0}
        />
      )}
      <Banner
        mainColor={'#' + adminData.brandingColor.main}
        highColor={'#' + adminData.brandingColor.high}
        ctaText={ctaText}
      />
      <Introduce />
      <IntroSection adminData={adminData} />
      <ScrollInteractiveLogo />
      {adminData && (
        <BottomLayout
          generation={adminData.generation ?? 0}
          partIntroduction={adminData.partIntroduction}
          latestNews={adminData.latestNews}
          mainColor={'#' + adminData.brandingColor.main}
          highColor={'#' + adminData.brandingColor.high}
          ctaText={ctaText}
          isRecruitEnd={isRecruitEnd}
        />
      )}
    </PageLayout>
  );
}

export default MainPage;
