import styled from '@emotion/styled';

export const Root = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    gap: 20px;
    width: 340px;
    overflow: auto;

    /* Hide scrollbar for Chrome, Safari and Opera */
    .example::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .example {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
`;

export const DotImg = styled.div`
  display: flex;
  height: 100%;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 30px;
  }
`;

export const PartWrapper = styled.div``;
