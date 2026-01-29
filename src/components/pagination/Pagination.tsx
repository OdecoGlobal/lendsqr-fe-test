import caretLeft from '../../assets/caret-left.svg';
import caretRight from '../../assets/caret-right.svg';
import styles from './pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemPerPageChange: (itemsPerPage: number) => void;
}

const Pagination = ({
  currentPage,
  totalItems,
  totalPages,
  itemsPerPage,
  onItemPerPageChange,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles['pagination-left']}>
        <span className={styles.label}>Showing</span>
        <select
          value={itemsPerPage}
          onChange={e => onItemPerPageChange(Number(e.target.value))}
          className={styles.select}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className={styles.label}>out of {totalItems}</span>
      </div>

      <div className={styles['pagination-right']}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={styles['nav-btn']}
          aria-label="Previous page"
        >
          <img src={caretLeft} alt="Previous Button" />
        </button>

        {pageNumbers.map((page, i) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${i}`} className={styles.ellipsis}>
                ...
              </span>
            );
          }
          return (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`${styles['page-btn']} ${
                currentPage === page ? styles.active : ''
              }`}
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={styles['nav-btn']}
          aria-label="Next Page"
        >
          <img src={caretRight} alt="Next Button" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
