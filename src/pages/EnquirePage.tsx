import { useState } from 'react';
import '../styles/pages.css';

export default function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="page-container" style={{ textAlign: 'center', paddingTop: '80px' }}>
        <h1 className="page-title">문의 완료</h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '24px' }}>
          문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            padding: '12px 24px',
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            borderRadius: 'var(--border-radius)',
            fontSize: '14px',
          }}
        >
          추가 문의하기
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">문의하기</h1>
      <form className="enquire-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">이름</label>
          <input className="form-input" type="text" id="name" required placeholder="이름을 입력하세요" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">이메일</label>
          <input className="form-input" type="email" id="email" required placeholder="이메일을 입력하세요" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="category">문의 유형</label>
          <select className="form-select" id="category" required>
            <option value="">선택하세요</option>
            <option value="general">일반 문의</option>
            <option value="partnership">제휴/광고 문의</option>
            <option value="content">콘텐츠 관련</option>
            <option value="etc">기타</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="subject">제목</label>
          <input className="form-input" type="text" id="subject" required placeholder="제목을 입력하세요" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">내용</label>
          <textarea className="form-textarea" id="message" required placeholder="문의 내용을 입력하세요" />
        </div>
        <button type="submit" className="form-submit">문의하기</button>
      </form>
    </div>
  );
}
