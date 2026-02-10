import { useState, useMemo } from 'react';

const ITEMS_PER_PAGE = 9;

export function usePagination<T>(items: T[], perPage = ITEMS_PER_PAGE) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage, perPage]);

  function goToPage(page: number) {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return { paginatedItems, currentPage, totalPages, goToPage };
}
