import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className='footer-logo'>
          <div>
            <Link to="/">
              <img src="/img/logo-g.png" alt="로고" />
            </Link>
            <p className="p">감성을 담은 원데이 클래스 플랫폼입니다.</p>
          </div>
        </div>
        <div className='footer-info'>
          <ul>
            <li>
              <a href="">깃허브</a>
            </li>
            <li>
              <a href="">노션</a>
            </li>
            <li>
              <a href="">피그마</a>
            </li>
          </ul>
          <p className="p">
            ⓒ 2025 Team Studio 3 <br className='m-br' />
            Designed & Developed by 경유라, 김선우, 양해지
          </p>
          <p className='copy'>
            Uicons by
            <a href="https://www.fontawesome.com/uicons" target="_blank" rel="noopener noreferrer">
              Fontawesome
            </a>
            {" · "}
            Images by
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>
            {" · "}
            Images by
            <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">
              Freepik
            </a>
          </p>
        </div>
        <div className='footer-faq'>
          <div>
            <h3 className="h3">도움이 필요하신가요?</h3>
            <Link to="/faq">FAQ / 1:1 문의</Link>
            <p className='p'>평일: 10:00 ~ 20:00 (주말, 공휴일 제외)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
