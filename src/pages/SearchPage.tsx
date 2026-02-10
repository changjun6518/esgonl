import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import ArticleCard from '../components/article/ArticleCard';
import amArticles from '../data/articles-am.json';
import noonArticles from '../data/articles-noon.json';
import pmArticles from '../data/articles-pm.json';
import type { Article, SectionType } from '../types';
import '../styles/pages.css';
import '../styles/article-list.css';

interface SearchResult {
  article: Article;
  section: SectionType;
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const results: SearchResult[] = useMemo(() => {
    const q = (searchParams.get('q') || '').toLowerCase().trim();
    if (!q) return [];

    const all: SearchResult[] = [
      ...(amArticles as Article[]).map((a) => ({ article: a, section: 'am' as SectionType })),
      ...(noonArticles as Article[]).map((a) => ({ article: a, section: 'noon' as SectionType })),
      ...(pmArticles as Article[]).map((a) => ({ article: a, section: 'pm' as SectionType })),
    ];

    return all.filter(({ article }) =>
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      (article.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [searchParams]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  }

  const searchTerm = searchParams.get('q') || '';

  return (
    <div className="page-container" style={{ maxWidth: 'var(--max-width)' }}>
      <h1 className="page-title">검색</h1>

      <form className="search-page-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-page-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit" className="search-page-btn">검색</button>
      </form>

      {searchTerm && (
        <>
          <p className="search-results-count">
            "{searchTerm}" 검색 결과: {results.length}건
          </p>

          {results.length === 0 ? (
            <p className="search-no-results">검색 결과가 없습니다.</p>
          ) : (
            <div className="article-grid">
              {results.map(({ article, section }) => (
                <ArticleCard key={`${section}-${article.idx}`} article={article} section={section} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
