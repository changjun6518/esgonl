import { Link } from 'react-router';
import quotes from '../../data/quotes-snack.json';
import type { Quote } from '../../types';

export default function SnackSection() {
  const data = quotes as Quote[];
  const latestQuote = data[0];

  if (!latestQuote) return null;

  return (
    <section className="home-section snack-section">
      <div className="home-section-inner">
        <div className="home-section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className="home-section-title-group" style={{ alignItems: 'center' }}>
            <span className="home-section-label">Snack Fortune Cookie</span>
            <h2 className="home-section-title">오늘의 ESG 한 마디</h2>
          </div>
        </div>

        <div className="snack-quote-card">
          <div className="snack-icon">&#127866;</div>
          <p className="snack-quote-text">{latestQuote.text}</p>
          <p className="snack-attribution">- {latestQuote.attribution}</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
          <Link to="/article/snackList" className="more-link">
            더 많은 한 마디 보기 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
