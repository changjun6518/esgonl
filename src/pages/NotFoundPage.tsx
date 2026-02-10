import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '16px',
    }}>
      <h1 style={{ fontSize: '64px', fontWeight: 700, color: 'var(--color-primary)' }}>404</h1>
      <p style={{ fontSize: '18px', color: 'var(--color-text-light)' }}>
        페이지를 찾을 수 없습니다.
      </p>
      <Link
        to="/"
        style={{
          marginTop: '16px',
          padding: '12px 24px',
          backgroundColor: 'var(--color-primary)',
          color: '#fff',
          borderRadius: 'var(--border-radius)',
          fontSize: '14px',
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
