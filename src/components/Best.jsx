//D:\studio3\1-D-CLASS\src\components\Best.jsx
import React, { useState, useEffect } from 'react';
import CardBest from '../components/CardBest';
import "../assets/css/best.css";

export default function Best() {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        // wishCount 기준 내림차순 정렬 (숫자로 변환 필수)
        const sorted = data.sort((a, b) => Number(b.wishCount) - Number(a.wishCount));
        setBestProducts(sorted.slice(0, 10));
      });
  }, []);

  return (
    <section id="best">
      <div className="wrap">
        <h2 className="h2 brown">Best 클래스</h2>
        <ul className='best-list'>
          {bestProducts.map((product, index) => (
            <CardBest key={product.id} product={product} rank={index + 1} />
          ))}
        </ul>
      </div>
    </section>
  );
}