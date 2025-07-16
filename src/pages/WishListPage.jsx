// src/pages/WishList.jsx
import React from 'react';
import { useWish } from '../context/WishContext';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import EmptyWish from '../components/EmptyWish';
import EmptyWishMobile from '../components/EmptyWishMobile'; //반응형
import '../assets/css/new.css';
import '../assets/css/WishListPage.css';

export default function WishList() {
  const { wishList } = useWish();
  const isMobile = window.innerWidth <= 768;

  return (
    <section id='wishList'>
      {wishList.length === 0 ? (
        isMobile ? <EmptyWishMobile /> : <EmptyWish />
      ) : (
        <div className='wrap product-list'>
          <h2>관심 있는 클래스</h2>
          <p>언젠가 해보고 싶은 클래스를 모아봤어요.</p>
          <ul className="product-list-container">
            {wishList.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
