import '../styles/pages.css';

const notices = [
  { id: 1, title: 'ESG.ONL 사이트 리뉴얼 안내', date: '2026.02.01' },
  { id: 2, title: '2026년 1월 뉴스레터 발송 안내', date: '2026.01.15' },
  { id: 3, title: '연말연시 운영 시간 변경 안내', date: '2025.12.20' },
  { id: 4, title: 'ESG.ONL 구독자 이벤트 당첨자 발표', date: '2025.12.01' },
  { id: 5, title: '개인정보보호방침 개정 안내', date: '2025.11.15' },
];

export default function NoticePage() {
  return (
    <div className="page-container">
      <h1 className="page-title">공지사항</h1>
      <div className="notice-list">
        {notices.map((notice) => (
          <div key={notice.id} className="notice-item">
            <span className="notice-title">{notice.title}</span>
            <span className="notice-date">{notice.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
