interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function padPage(n: number): string {
  return String(n).padStart(3, '0');
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  const groupSize = 10;
  const currentGroup = Math.floor((currentPage - 1) / groupSize);
  const startPage = currentGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const pages: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="pagination" aria-label="페이지 네비게이션">
      <button
        className={`pagination-btn pagination-btn--arrow ${currentPage === 1 ? 'pagination-btn--disabled' : ''}`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="첫 페이지"
      >
        &laquo;
      </button>
      <button
        className={`pagination-btn pagination-btn--arrow ${currentPage === 1 ? 'pagination-btn--disabled' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
      >
        &lsaquo;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? 'pagination-btn--active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {padPage(page)}
        </button>
      ))}

      <button
        className={`pagination-btn pagination-btn--arrow ${currentPage === totalPages ? 'pagination-btn--disabled' : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
      >
        &rsaquo;
      </button>
      <button
        className={`pagination-btn pagination-btn--arrow ${currentPage === totalPages ? 'pagination-btn--disabled' : ''}`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="마지막 페이지"
      >
        &raquo;
      </button>
    </nav>
  );
}
