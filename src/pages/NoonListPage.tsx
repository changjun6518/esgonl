import ArticleCard from '../components/article/ArticleCard';
import Pagination from '../components/article/Pagination';
import { usePagination } from '../hooks/usePagination';
import articles from '../data/articles-noon.json';
import type { Article } from '../types';
import '../styles/article-list.css';

export default function NoonListPage() {
  const data = articles as Article[];
  const { paginatedItems, currentPage, totalPages, goToPage } = usePagination(data);

  return (
    <div className="article-list-page">
      <div className="article-list-header">
        <p className="article-list-label">Noon Lunch Box</p>
        <h1 className="article-list-title">오늘 배우는 ESG 키워드</h1>
      </div>

      <div className="article-grid">
        {paginatedItems.map((article) => (
          <ArticleCard key={article.idx} article={article} section="noon" />
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
