import { useIsDesktop } from '@src/hooks/useDevice';
import CautionIcon from './CautionIcon';
import St from './style';

const DataErrorBanner = () => {
  const isDesktop = useIsDesktop('1200px');

  return (
    <St.Container>
      <St.Caution>
        <CautionIcon width={isDesktop ? 51 : 36} />
      </St.Caution>
      <St.Texts>
        <St.Strong>데이터 오류 발생!</St.Strong>
        <p>잠시 후 다시 시도해주세요.</p>
      </St.Texts>
    </St.Container>
  );
};

export default DataErrorBanner;
