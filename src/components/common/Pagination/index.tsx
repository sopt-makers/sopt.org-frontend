import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { ReactComponent as IcPaginationLeft } from '@src/assets/icons/ic_pagination_left.svg';
import { ReactComponent as IcPaginationRight } from '@src/assets/icons/ic_pagination_right.svg';

const BACKWARD_PAGE_BUTTON_COUNT = 2;
const ADDITIONAL_PAGE_BUTTON_COUNT = 4;

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPage,
  hasPrevPage,
  hasNextPage,
  onPageChange,
}: PaginationProps) => {
  const renderPaginationButtons = () => {
    const pageButtons = [];
    let startPage = Math.max(1, currentPage - BACKWARD_PAGE_BUTTON_COUNT);
    const endPage = Math.min(totalPage, startPage + ADDITIONAL_PAGE_BUTTON_COUNT);

    if (endPage - startPage < ADDITIONAL_PAGE_BUTTON_COUNT) {
      startPage = Math.max(1, endPage - ADDITIONAL_PAGE_BUTTON_COUNT);
    }
    for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
      pageButtons.push(
        <StPageButton
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </StPageButton>,
      );
    }
    return pageButtons;
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
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
  margin: 20px 0 72px 0;
  justify-content: center;
  align-items: center;
  gap: 12px;

  svg {
    path {
      stroke: ${colors.gray200};
    }
  }

  button:first-of-type {
    margin-right: 12px;
  }

  button:last-of-type {
    margin-left: 12px;
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
  width: 40px;
  height: 40px;
  padding: 11px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ active }) => active && colors.gray10};
  color: ${({ active }) => (active ? colors.gray950 : colors.gray200)};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    transition: all 0.2s ease-in;
  }
`;
