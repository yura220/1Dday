import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import "../assets/css/header.css";
import MobileMenu from './MobileMenu';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;

    // 모바일 감지
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      navigate(`/search-mobile?search=${encodeURIComponent(query)}`);
    } else {
      navigate(`/search?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header>
      <div className='wrap'>
        <Link to="/"><h1 className="h1">1:D CLASS</h1></Link>
        <SearchBar></SearchBar>
        <ul className='gnb'>
          <li><Link to="/wishlist">찜</Link></li>
          <li><Link to="/login">로그인</Link></li>
          <li><a href="">언어</a></li>
          <li>
            <a className="menu-btn" onClick={() => {
                if (window.innerWidth <= 768) {
                  setMenuOpen(true);
                }
              }}
            >
              메뉴
            </a>
          </li>
        </ul>
      </div>

      {/* 사이드 메뉴 표시 */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

