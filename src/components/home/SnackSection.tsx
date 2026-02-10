import { Link } from 'react-router';
import quotes from '../../data/quotes-snack.json';
import type { Quote } from '../../types';

export default function SnackSection() {
  const data = quotes as Quote[];
  const latestQuote = data[0];

  if (!latestQuote) return null;

  return (
    <section className="home-section section-snack">
      <div className="home-section-inner">
        <div className="home-section-header">
          <div className="home-section-title-group">
            <span className="home-section-label">
              <span className="home-section-time-icon">{'\uD83C\uDF60'}</span>
              Snack Fortune Cookie
            </span>
            <h2 className="home-section-title">오늘의 ESG 한 마디</h2>
          </div>
        </div>

        <div className="snack-quote-card">
          <div className="snack-icon">{'\uD83E\uDD60'}</div>
          <p className="snack-quote-text">{latestQuote.text}</p>
          <p className="snack-attribution">- {latestQuote.attribution}</p>
        </div>

        <div className="snack-more-link">
          <Link to="/article/snackList" className="more-link">
            더 많은 한 마디 보기 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
