import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Login.css";

export default function Login() {
  return (
    <section id="login">
      <div className="wrap">
        <h2 className="h2">로그인하고 나에게 딱 맞는<br />클래스를 만나보세요</h2>
        <form action="" method="get">
          <input type="text" name="email" id="email" placeholder="이메일(아이디)" />
          <input type="password" name="password" id="password" placeholder="비밀번호" />
          <Link to="">이메일/비밀번호 찾기</Link>
          <button type="submit">로그인</button>
        </form>
        <p className="p">
          아직 회원이 아니신가요?&nbsp;<Link to="/sign">회원가입</Link>
        </p>
      </div>
    </section>
  );
}
