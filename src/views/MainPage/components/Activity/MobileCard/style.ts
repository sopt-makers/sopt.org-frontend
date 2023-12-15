import styled from '@emotion/styled';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  .slick-track {
    margin-bottom: 10px;
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev {
    left: 6px;
    z-index: 2;
  }
  .slick-next {
    right: 6px;
    z-index: 2;
  }
  .slick-dots li {
    width: 0;
    margin: 0px 7px;
  }
  .slick-dots li button {
    ::before {
      font-size: 7px;
      color: #2d4c791a;
      opacity: 1;
    }
  }
  .slick-dots li.slick-active button {
    ::before {
      color: #2d4c79;
      opacity: 1;
    }
  }
  .slick-prev,
  .slick-next {
    width: 26px;
    height: 23px;
  }
`;
