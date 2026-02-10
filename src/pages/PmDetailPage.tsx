import { Link } from 'react-router';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useArticleDetail } from '../hooks/useArticles';
import ShareButtons from '../components/article/ShareButtons';
import '../styles/article-detail.css';

export default function PmDetailPage() {
  const { article, content, prevArticle, nextArticle } = useArticleDetail('pm');

  if (!article) {
    return (
      <div className="article-detail-page" style={{ textAlign: 'center', padding: '80px 0' }}>
        <p>기사를 찾을 수 없습니다.</p>
        <Link to="/article/pmList" style={{ color: 'var(--color-accent)', marginTop: '16px', display: 'inline-block' }}>
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <header className="article-detail-header">
        <p className="article-detail-category">{article.category}</p>
        <h1 className="article-detail-title">{article.title}</h1>
        <div className="article-detail-meta">
          <span>{article.author}</span>
          <span className="article-detail-meta-divider" />
          <span>{article.date}</span>
        </div>
      </header>

      <div className="article-detail-body">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>

      <ShareButtons title={article.title} />

      <nav className="article-nav">
        {prevArticle ? (
          <Link to={`/article/pmDetail?idx=${prevArticle.idx}`} className="article-nav-link article-nav-link--prev">
            <span className="article-nav-label">&larr; 이전 글</span>
            <span className="article-nav-title">{prevArticle.title}</span>
          </Link>
        ) : <div />}
        {nextArticle ? (
          <Link to={`/article/pmDetail?idx=${nextArticle.idx}`} className="article-nav-link article-nav-link--next">
            <span className="article-nav-label">다음 글 &rarr;</span>
            <span className="article-nav-title">{nextArticle.title}</span>
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
