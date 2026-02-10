import { useState, useMemo } from 'react';
import quotes from '../data/quotes-snack.json';
import type { Quote } from '../types';
import '../styles/article-list.css';

export default function SnackListPage() {
  const data = quotes as Quote[];
  const years = [...new Set(data.map((q) => q.year))].sort((a, b) => b - a);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const [selectedYear, setSelectedYear] = useState(years[0] || 2026);
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = 전체

  const filtered = useMemo(() => {
    return data.filter((q) => {
      if (q.year !== selectedYear) return false;
      if (selectedMonth > 0 && q.month !== selectedMonth) return false;
      return true;
    });
  }, [data, selectedYear, selectedMonth]);

  return (
    <div className="snack-list-page">
      <div className="article-list-header">
        <p className="article-list-label">Snack Fortune Cookie</p>
        <h1 className="article-list-title">오늘의 ESG 한 마디</h1>
      </div>

      <div className="snack-filter">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}년</option>
          ))}
        </select>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          <option value={0}>전체</option>
          {months.map((m) => (
            <option key={m} value={m}>{m}월</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '48px 0' }}>
          해당 기간의 명언이 없습니다.
        </p>
      ) : (
        <div className="snack-quotes-grid">
          {filtered.map((quote) => (
            <div key={quote.id} className="snack-quote-list-card">
              <p className="snack-quote-list-text">{quote.text}</p>
              <div className="snack-quote-list-footer">
                <span className="snack-quote-list-attribution">- {quote.attribution}</span>
                <span>{quote.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
