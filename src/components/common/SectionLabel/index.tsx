import styled from '@emotion/styled';
import { typography } from '@sopt-mds/design-tokens';
import { media } from '@src/lib/styles/breakpoints';

interface SectionLabelProps {
  label: string;
  color: string;
}

export default function SectionLabel({ label, color }: SectionLabelProps) {
  return <Label color={color}>{label}</Label>;
}

const Label = styled.span<{ color: string }>`
  // 데스크탑, 테블릿, 모바일 공통 스타일
  position: relative;
  padding: 5px 13px;
  color: ${({ color }) => color};
  ${typography.body2}

  ${media.mobile} {
    ${typography.body3}
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 100px;
    background: linear-gradient(
      to bottom right,
      ${({ color }) => color} 0%,
      color-mix(in srgb, ${({ color }) => color} 45%, transparent) 32%,
      transparent 66%
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
  }
`;
