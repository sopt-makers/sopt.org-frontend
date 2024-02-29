import imgMainValue from '@src/assets/images/img_mainvalue_logos.png';
import * as S from './style';

const ApplySection = () => {
  return (
    <S.Wrapper imgMainValue={imgMainValue}>
      <S.Chip>YB RECRUITING</S.Chip>
      <div style={{ height: '13px' }} />
      <S.Title>SOPT의 33번째 열정이 되어주세요!</S.Title>
      <div style={{ height: '49px' }} />
      <S.BlurOverlay />
      <S.ApplyButton href="https://sopt-recruiting.web.app/recruiting/apply/yb" target="_blank">
        지원하기
      </S.ApplyButton>
    </S.Wrapper>
  );
};
export default ApplySection;
