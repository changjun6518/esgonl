import { useState } from 'react';

interface Props {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: Props) {
  const [showToast, setShowToast] = useState(false);
  const shareUrl = url || window.location.href;

  function shareToFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  }

  function copyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  }

  return (
    <div className="share-section">
      <span className="share-label">공유</span>
      <div className="share-buttons">
        <button
          className="share-btn share-btn--kakao"
          onClick={() => alert('카카오톡 공유는 카카오 SDK 설정이 필요합니다.')}
          aria-label="카카오톡 공유"
          title="카카오톡 공유"
        >
          K
        </button>
        <button
          className="share-btn share-btn--facebook"
          onClick={shareToFacebook}
          aria-label="페이스북 공유"
          title="페이스북 공유"
        >
          f
        </button>
        <button
          className="share-btn share-btn--link"
          onClick={copyLink}
          aria-label="링크 복사"
          title={`링크 복사: ${title}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </button>
      </div>
      {showToast && <div className="share-toast">링크가 복사되었습니다!</div>}
    </div>
  );
}
