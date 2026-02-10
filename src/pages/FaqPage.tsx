import { useState } from 'react';
import '../styles/pages.css';

const faqs = [
  {
    q: 'ESG.ONL은 어떤 서비스인가요?',
    a: 'ESG.ONL은 환경(E), 사회(S), 지배구조(G)에 관한 최신 정보를 매일 제공하는 디지털 매거진입니다. 기획기사, ESG 키워드, 최신 뉴스, 명언 등 다양한 콘텐츠를 만나볼 수 있습니다.',
  },
  {
    q: '콘텐츠는 얼마나 자주 업데이트되나요?',
    a: '매일 새로운 콘텐츠가 업데이트됩니다. AM Coffee & Bagel(기획기사), Noon Lunch Box(ESG 키워드), PM Tea Time(최신 뉴스), Snack Fortune Cookie(ESG 명언) 섹션이 매일 갱신됩니다.',
  },
  {
    q: '콘텐츠를 공유할 수 있나요?',
    a: '네, 모든 기사 페이지에서 카카오톡, 페이스북 공유 및 링크 복사 기능을 이용할 수 있습니다.',
  },
  {
    q: '광고나 제휴 문의는 어떻게 하나요?',
    a: '문의하기 페이지를 통해 연락해 주시거나, hello@esgonl.kr로 이메일을 보내주세요. 담당자가 확인 후 회신드리겠습니다.',
  },
  {
    q: 'ESG가 무엇인가요?',
    a: 'ESG는 Environmental(환경), Social(사회), Governance(지배구조)의 약자로, 기업의 비재무적 요소를 평가하는 기준입니다. 기업이 환경을 보호하고, 사회적 책임을 다하며, 투명한 지배구조를 갖추었는지를 나타냅니다.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="page-container">
      <h1 className="page-title">FAQ</h1>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>Q. {faq.q}</span>
              <span className="faq-arrow">▼</span>
            </button>
            <div className="faq-answer">
              A. {faq.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
