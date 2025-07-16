import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Sign.css";

export default function Sign() {
  return (
    <section id="sign">
      <div className="wrap">
        <h2 className="h2">회원가입 페이지</h2>
        <form action="" method="post">
          <input type="email" name="email" id="email" placeholder="이메일" />
          <input type="text" name="name" id="name" placeholder="아이디" />
          <input type="password" name="password" id="password" placeholder="비밀번호" />
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="비밀번호 확인" />
          <button type="submit">회원가입</button>
        </form>
        <p className="p">
          이미 회원이신가요?&nbsp;<Link to="/login">로그인</Link>
        </p>
      </div>
    </section>
  );
}
