import '../styles/pages.css';

export default function AboutPage() {
  return (
    <div>
      <div className="about-hero">
        <div className="about-hero-logo">
          ESG<span className="logo-dot">.</span>ONL
        </div>
        <p className="about-hero-tagline">내일을 위한 오늘의 매거진</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>ESG.ONL 소개</h2>
          <p>
            ESG.ONL은 환경(Environment), 사회(Social), 지배구조(Governance)에 관한
            최신 정보를 쉽고 재미있게 전달하는 디지털 매거진입니다.
          </p>
          <p>
            매일 아침 기획기사와 인터뷰(AM Coffee & Bagel), 점심시간 ESG 키워드 학습(Noon Lunch Box),
            오후의 최신 뉴스(PM Tea Time), 그리고 하루를 마무리하는 ESG 명언(Snack Fortune Cookie)으로
            구성된 콘텐츠를 제공합니다.
          </p>
        </div>

        <div className="about-section">
          <h2>운영 철학</h2>
          <p>
            우리는 ESG가 어려운 전문 용어가 아니라 일상 속에서 실천할 수 있는 가치라고 믿습니다.
            복잡한 개념을 누구나 이해할 수 있도록 쉽게 풀어내고, 기업과 개인 모두가 지속가능한
            미래를 위해 함께 나아갈 수 있도록 돕는 것이 우리의 목표입니다.
          </p>
        </div>

        <div className="about-section">
          <h2>에디터</h2>
          <div className="about-editors">
            <div className="about-editor-card">
              <div className="about-editor-avatar">L</div>
              <p className="about-editor-name">Editor L</p>
              <p className="about-editor-role">기획기사 · ESG 투자</p>
            </div>
            <div className="about-editor-card">
              <div className="about-editor-avatar">O</div>
              <p className="about-editor-name">Editor O</p>
              <p className="about-editor-role">환경정책 · 사회 이슈</p>
            </div>
            <div className="about-editor-card">
              <div className="about-editor-avatar">N</div>
              <p className="about-editor-name">Editor N</p>
              <p className="about-editor-role">지배구조 · 글로벌 트렌드</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>회사 정보</h2>
          <p>도모 주식회사</p>
          <p>서울시 강남구 학동로 518 2&3층</p>
          <p>대표전화: 02-6253-0417 (평일 10:00~17:00)</p>
          <p>이메일: hello@esgonl.kr</p>
        </div>
      </div>
    </div>
  );
}
