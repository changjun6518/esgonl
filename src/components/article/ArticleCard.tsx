import { Link } from 'react-router';
import type { Article, SectionType } from '../../types';

interface Props {
  article: Article;
  section: SectionType;
}

const sectionDetailPath: Record<string, string> = {
  am: '/article/amDetail',
  noon: '/article/noonDetail',
  pm: '/article/pmDetail',
};

export default function ArticleCard({ article, section }: Props) {
  const detailPath = sectionDetailPath[section];

  return (
    <Link to={`${detailPath}?idx=${article.idx}`} className="article-card">
      <img
        className="article-card-image"
        src={article.thumbnail}
        alt={article.title}
        loading="lazy"
      />
      <div className="article-card-body">
        <span className="article-card-category">{article.category}</span>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-summary">{article.summary}</p>
        <div className="article-card-footer">
          <span>{article.author} · {article.date}</span>
        </div>
      </div>
    </Link>
  );
}
