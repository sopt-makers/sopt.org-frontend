import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { useState } from 'react';
import { ReactComponent as IcPaginationLeft } from '@src/assets/icons/ic_pagination_left.svg';
import { ReactComponent as IcPaginationRight } from '@src/assets/icons/ic_pagination_right.svg';

const BACKWARD_PAGE_BUTTON_COUNT = 2;
const ADDITIONAL_PAGE_BUTTON_COUNT = 4;
const INIT_PAGE = 1;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const Pagination = ({ currentPage, totalPages, hasPrevPage, hasNextPage }: PaginationProps) => {
  const [, setCurrentPage] = useState(INIT_PAGE);

  const renderPaginationButtons = () => {
    const pageButtons = [];
    let startPage = Math.max(1, currentPage - BACKWARD_PAGE_BUTTON_COUNT);
    let endPage = Math.min(totalPages, startPage + ADDITIONAL_PAGE_BUTTON_COUNT);

    if (endPage - startPage < ADDITIONAL_PAGE_BUTTON_COUNT) {
      startPage = Math.max(1, endPage - ADDITIONAL_PAGE_BUTTON_COUNT);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <StPageButton key={i} onClick={() => handlePageChange(i)} active={i === currentPage}>
          {i}
        </StPageButton>,
      );
    }
    return pageButtons;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <StPagination>
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrevPage}
      >
        <IcPaginationLeft />
      </button>
      {renderPaginationButtons()}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
      >
        <IcPaginationRight />
      </button>
    </StPagination>
  );
};

export default Pagination;

const StPagination = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  svg {
    path {
      stroke: ${colors.gray200};
    }
  }

  button:first-of-type {
    margin-right: 1.2rem;
  }

  button:last-of-type {
    margin-left: 1.2rem;
  }

  button:disabled {
    cursor: not-allowed;
    svg {
      path {
        stroke: ${colors.gray700};
      }
    }
  }

  button:hover:not(:disabled) {
    svg {
      path {
        stroke: ${colors.white};
        transition: all 0.3s ease-in;
      }
    }
  }
`;

const StPageButton = styled.button<{ active: boolean }>`
  display: flex;
  width: 4rem;
  height: 4rem;
  padding: 1.1rem 0.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: ${({ active }) => active && colors.gray10};
  color: ${({ active }) => (active ? colors.gray950 : colors.gray200)};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.09px;

  &:hover {
    color: ${colors.white};
    transition: all 0.2s ease-in;
  }
`;
