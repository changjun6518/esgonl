import ArticleCard from '../components/article/ArticleCard';
import Pagination from '../components/article/Pagination';
import { usePagination } from '../hooks/usePagination';
import articles from '../data/articles-pm.json';
import type { Article } from '../types';
import '../styles/article-list.css';

export default function PmListPage() {
  const data = articles as Article[];
  const { paginatedItems, currentPage, totalPages, goToPage } = usePagination(data);

  return (
    <div className="article-list-page">
      <div className="article-list-header">
        <p className="article-list-label">PM Tea Time</p>
        <h1 className="article-list-title">ESG 최신 뉴스</h1>
      </div>

      <div className="article-grid">
        {paginatedItems.map((article) => (
          <ArticleCard key={article.idx} article={article} section="pm" />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
