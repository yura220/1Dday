import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WishBtn from './WishBtn.jsx';

const Card = ({ product, rank }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    // 모바일 전용 렌더링
    <li>
      <article className='best-info'>
        <div className='imgbox'>
          <img src={product.mainImg} alt={product.name} />
        </div>
        <WishBtn className='best-book' product={product} />
        <span className='num'>{rank}</span> {/* 순위 출력 */}
        <Link className="card" to={`/product/${product.id}`}>
          <div className='info-top'>
            <div className="tags">
              <span className='category'>{product.category}</span>
              <span className='day'>{product.day}</span>
            </div>
            <div className="best-rating">
              <span className='review'>{product.reviewCount}</span>
              <span className='wish'>{product.wishCount}</span>
            </div>
          </div>
          <h3 className="h3">{product.name}</h3>
          <p className="p">{product.desc}</p>
          <div className="price">
            <span className='basic-price' >{product.price.toLocaleString()}원</span>
            <span className='discount'>
              {Math.round((1 - product.discount) * 100)}%
            </span>
            <p className="p">
              {Math.round(product.price * product.discount).toLocaleString()}원
            </p>
          </div>
        </Link>
      </article>
    </li>
  ) : (
    // 웹 전용 렌더링
    <li>
      <article className='best-info'>
        <img src={product.mainImg} alt={product.name} />
        <WishBtn className='best-book' product={product} />
        <span className='num'>{rank}</span> {/* 순위 출력 */}
        <Link className="card" to={`/product/${product.id}`}>
          <div className='info-top'>
            <div className="tags">
              <span>{product.category}</span>
              <span>{product.day}</span>
            </div>
            <div className="best-rating">
              <span className='review'>{product.reviewCount}</span>
              <span className='wish'>{product.wishCount}</span>
            </div>
          </div>
          <h3 className="h3">{product.name}</h3>
          <p className="p">{product.desc}</p>
          <div className="price">
            <span className='discount'>
              {Math.round((1 - product.discount) * 100)}%
            </span>
            <p className="p">
              <span>{product.price.toLocaleString()}원</span>
              {Math.round(product.price * product.discount).toLocaleString()}원
            </p>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default Card;
