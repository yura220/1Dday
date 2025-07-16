import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardWishBest from './CardWishBest';
//css코드는 wishListPage.css 파일에 같이 있음

export default function EmptyWish() {

  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => Number(b.wishCount) - Number(a.wishCount));
        setBestProducts(sorted.slice(0, 3));
      });
  }, []);

  return (
    <>
    <div className="wrap emptyWish">
      <h2>아직 찜한 클래스가 없어요!</h2>
      <p className='logoImg'>
        마음에 드는 클래스를 찜하면<br />언제든 다시 확인할 수 있어요.
      </p>
      <div className='wishBest'>
        <h3>많이 찜한 클래스</h3>
        <ul className='best3'>
          {bestProducts.map((product, idx) => (
            <CardWishBest key={product.id} product={product} rank={idx + 1} />
          ))}
        </ul>
      </div>
      <Link to="/products/all" className="btn">클래스 둘러보기</Link>
    </div>
    </>
    );
}