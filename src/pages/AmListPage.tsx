import ArticleCard from '../components/article/ArticleCard';
import Pagination from '../components/article/Pagination';
import { usePagination } from '../hooks/usePagination';
import articles from '../data/articles-am.json';
import type { Article } from '../types';
import '../styles/article-list.css';

export default function AmListPage() {
  const data = articles as Article[];
  const { paginatedItems, currentPage, totalPages, goToPage } = usePagination(data);

  return (
    <div className="article-list-page">
      <div className="article-list-header">
        <p className="article-list-label">AM Coffee & Bagel</p>
        <h1 className="article-list-title">기획기사, 인터뷰</h1>
      </div>

      <div className="article-grid">
        {paginatedItems.map((article) => (
          <ArticleCard key={article.idx} article={article} section="am" />
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
