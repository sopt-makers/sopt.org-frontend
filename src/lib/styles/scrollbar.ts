import styled from '@emotion/styled';

export const HideScrollbar = styled.div`
  /* Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* IE and Edge */
  -ms-overflow-style: none;
`;
