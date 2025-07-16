// Section3.jsx
import React, { forwardRef } from 'react';

const Section3 = forwardRef((props, ref) => (
  <section className="wrap product-section" id="section3" ref={ref}>
    <h2>튜터 소개</h2>
    <div className='tutor'>
      <div className="profile">
        <div className='img-box'>
          <img src="/img/tutor.jpg" alt="강사 프로필 사진" className="profile-img" />
        </div>
        <div className="basic-info">
          <strong className="name">펫공방 스튜디오</strong>
          <div className="sns">
            <a className='instagram' href="https://instagram.com/" target="_blank" rel="noopener noreferrer">@_petgram</a>
            <a className='utube' href="https://youtube.com" target="_blank" rel="noopener noreferrer">펫공방채널</a>
          </div>
        </div>
      </div>

      <p className="qualification">✔ 펫푸드 전문가 자격증 (한국반려동물교육협회)</p>
      <div className="description">
        <p>
          펫공방스튜디오는 경기 교육청 정식 허가 등록(제 5615-1호) 된 반려동물 수제간식 전문학원으로<br />
          원데이 클래스부터 취미반, 자격증반, 창업반, 펫베이커리, 펫케이크, 반려동물 자연식, 반려동물 영양관리사,<br />
          펫교감카드(펫타로) 등 다양한 수업을 운영하는 한국반려동물교육협회(KCAEA) 본원 입니다.
        </p>
      </div>
    </div>
  </section>
));

export default Section3;