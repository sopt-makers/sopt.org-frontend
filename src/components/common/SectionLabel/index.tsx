import styled from '@emotion/styled';

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
  font-size: 16rem;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.24px;

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
