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

const placeholderColors: Record<string, string> = {
  am: '%23e8edf3',
  noon: '%23e3f2fd',
  pm: '%23fff3e0',
};

function getPlaceholder(section: SectionType, title: string) {
  const color = placeholderColors[section] || '%23e8edf3';
  return 'data:image/svg+xml,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" fill="${color}"><rect width="400" height="250"/><text x="200" y="125" text-anchor="middle" fill="%23999" font-size="14" font-family="sans-serif">${title.slice(0, 20)}</text></svg>`
  );
}

export default function ArticleCard({ article, section }: Props) {
  const detailPath = sectionDetailPath[section];

  return (
    <Link to={`${detailPath}?idx=${article.idx}`} className="article-card">
      <img
        className="article-card-image"
        src={getPlaceholder(section, article.title)}
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
