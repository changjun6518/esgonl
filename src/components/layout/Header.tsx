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

  function closeMobileMenu() {
    setMobileMenuOpen(false);
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
              <Link to="/article/amList" className="nav-link" data-section="am" onClick={closeMobileMenu}>
                <span className="nav-link-icon">{'\u2615'}</span> AM
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/article/noonList" className="nav-link" data-section="noon" onClick={closeMobileMenu}>
                <span className="nav-link-icon">{'\u2600'}</span> Noon
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/article/snackList" className="nav-link" data-section="snack" onClick={closeMobileMenu}>
                <span className="nav-link-icon">{'\uD83C\uDF60'}</span> Snack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/article/pmList" className="nav-link" data-section="pm" onClick={closeMobileMenu}>
                <span className="nav-link-icon">{'\uD83C\uDF75'}</span> PM
              </Link>
            </li>
            <li className="nav-item">
              <div
                className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
                ref={dropdownRef}
              >
                <button
                  className="nav-dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {'ONL\uC740'} <span className="nav-dropdown-arrow">{'\u25BC'}</span>
                </button>
                <div className="nav-dropdown-menu">
                  <Link
                    to="/onl/about"
                    className="nav-dropdown-item"
                    onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}
                  >
                    {'ONL \uC18C\uAC1C'}
                  </Link>
                  <Link
                    to="/onl/notice"
                    className="nav-dropdown-item"
                    onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}
                  >
                    {'\uACF5\uC9C0\uC0AC\uD56D'}
                  </Link>
                  <Link
                    to="/onl/faq"
                    className="nav-dropdown-item"
                    onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/onl/enquire"
                    className="nav-dropdown-item"
                    onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}
                  >
                    {'\uBB38\uC758\uD558\uAE30'}
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="header-search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={'\uAC80\uC0C9\uC5B4 \uC785\uB825'}
                autoFocus
                className="header-search-input"
              />
              <button
                type="button"
                className="header-search-btn"
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              >
                {'\u2715'}
              </button>
            </form>
          ) : (
            <button
              className="header-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="검색"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
