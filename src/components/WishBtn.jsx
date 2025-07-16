// src/components/WishBtn.jsx
import React from 'react';
import { useWish } from '../context/WishContext';
import bookmarkFull from '/img/bookmark-p.png';
import bookmarkWhite from '/img/bookmark-w.png';
import bookmarkGray from '/img/bookmark-g.png';


const WishBtn = ({ product, iconType }) => {
  const { toggleWish, isWished } = useWish();
  const wished = isWished(product.id);

  // 아이콘 분기
  let icon;
  if (wished) {
    icon = bookmarkFull;
  } else {
    icon = iconType === 'gray' ? bookmarkGray : bookmarkWhite;
  }

  return (
    <button className='wish-btn'
      onClick={(e) => {
        e.preventDefault(); // 링크 클릭 방지
        toggleWish(product);
      }}
    >
      <img src={icon} alt="찜하기"/>
    </button>
  );
};

export default WishBtn;
