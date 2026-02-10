import { Link } from 'react-router';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-logo">
            ESG<span className="logo-dot">.</span>ONL
          </div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/esg.onl"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://x.com/esgonl"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="https://www.youtube.com/@esgonl"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="YouTube"
            >
              YT
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p className="footer-company">도모 주식회사</p>
            <div className="footer-details">
              <p>서울시 강남구 학동로 518 2&3층</p>
              <p>대표전화: 02-6253-0417 (평일 10:00~17:00)</p>
              <p>이메일: hello@esgonl.kr</p>
            </div>
          </div>

          <div className="footer-links">
            <Link to="/privacy" className="footer-link">
              개인정보보호방침
            </Link>
            <Link to="/terms" className="footer-link">
              이용약관
            </Link>
          </div>
        </div>

        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} ESG.ONL All rights reserved.
        </div>
      </div>
    </footer>
  );
}
