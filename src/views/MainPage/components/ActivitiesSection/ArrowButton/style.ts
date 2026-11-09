import styled from '@emotion/styled';
import { IconChevronLeft, IconChevronRight } from '@sopt-makers/icons';
import { colorBg, colorFg } from '@sopt-mds/design-tokens';

// Figma CarouselControls size=40
export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colorBg.neutral.ghost};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background-color: ${colorBg.neutral.ghostHover};
    }
  }

  &:focus-visible {
    outline: 2px solid ${colorFg.neutral.bold};
    outline-offset: 3px;
  }
`;

const iconStyle = `
  width: 30px;
  height: 30px;
  color: ${colorFg.neutral.bold};
`;

export const PrevIcon = styled(IconChevronLeft)`
  ${iconStyle}
`;

export const NextIcon = styled(IconChevronRight)`
  ${iconStyle}
`;
