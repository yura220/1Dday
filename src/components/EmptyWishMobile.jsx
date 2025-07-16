import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardWishBest from './CardWishBest';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/wishListPage.css';

export default function EmptyWish() {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => Number(b.wishCount) - Number(a.wishCount));
        setBestProducts(sorted.slice(0, 3));
      });
  }, []);

  const slickSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="wrap emptyWish">
      <h2>아직 찜한 클래스가 없어요!</h2>
      <p className='logoImg'>
        마음에 드는 클래스를 찜하면<br />언제든 다시 확인할 수 있어요.
      </p>

      <Link to="/products/all" className="btn">클래스 둘러보기</Link>

      <div className='wishBest'>
        <h3>많이 찜한 클래스</h3>
        <Slider {...slickSettings} className='best3'>
          {bestProducts.map((product, idx) => (
            <CardWishBest key={product.id} product={product} rank={idx + 1} />
          ))}
        </Slider>
      </div>

    </div>
  );
}
