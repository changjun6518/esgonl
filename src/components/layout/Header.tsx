import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import '../../styles/header.css';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/article/articleSearch?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <Link to="/">
            ESG<span className="logo-dot">.</span>ONL
          </Link>
        </div>

        <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <div
                className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
                ref={dropdownRef}
              >
                <button
                  className="nav-dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  ONL은 <span className="nav-dropdown-arrow">▼</span>
                </button>
                <div className="nav-dropdown-menu">
                  <Link
                    to="/onl/about"
                    className="nav-dropdown-item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    ONL 소개
                  </Link>
                  <Link
                    to="/onl/notice"
                    className="nav-dropdown-item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    공지사항
                  </Link>
                  <Link
                    to="/onl/faq"
                    className="nav-dropdown-item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/onl/enquire"
                    className="nav-dropdown-item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    문의하기
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          {searchOpen ? (
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어 입력"
                autoFocus
                style={{
                  padding: '6px 12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--border-radius-sm)',
                  fontSize: 'var(--font-size-sm)',
                  outline: 'none',
                  width: '180px',
                }}
              />
              <button
                type="button"
                className="header-search-btn"
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              >
                ✕
              </button>
            </form>
          ) : (
            <button
              className="header-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="검색"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          )}

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
