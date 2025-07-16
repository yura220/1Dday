import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate import
import "../assets/css/MobileMenu.css";

const categories = ['전체', '반려동물', '뷰티', '스포츠', '쿠킹'];

export default function MobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleClick = (category) => {
    const path = category === '전체' ? '/products/all' : `/products/${category}`;
    navigate(path);
    onClose(); // 메뉴 닫기
  };

  return (
    <>
      {isOpen && <div className="dimmed" onClick={onClose}></div>}
      <aside id="menu" className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-top">
          <button className="close-btn" onClick={onClose}>닫기</button>
          <button className="my-btn" onClick={onClose}>앱설정</button>
        </div>
        <div className="menu-content">
          <div className="my">
            <Link to="/login" onClick={onClose}>
              <p>로그인</p>
              <div className="imgbox">
                <img src="/img/logo-icon.png" alt="프로필사진" />
              </div>
            </Link>
          </div>

          <ul className="menu-button">
            <li><span></span>언어</li>
            <hr />
            <li>
              <Link to="/wishlist" onClick={onClose}>
                <span></span>위시리스트
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/faq" onClick={onClose}>
                <span></span>고객센터
              </Link>
            </li>
          </ul>

          <div className="menu-bottom">
            <strong>카테고리</strong>
            <ul>
              {categories.map((cat) => (
                <li key={cat} onClick={() => handleClick(cat)}>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
