import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CardBest from '../components/CardBest';
import "../assets/css/best.css";
import "../assets/css/bestMobile.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Best() {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => Number(b.wishCount) - Number(a.wishCount));
        setBestProducts(sorted.slice(0, 10)); // 총 10개
      });
  }, []);

  // 5개씩 묶기
  const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

  const groupedProducts = chunkArray(bestProducts, 5);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:false
  };

  return (
    <section id="bestMobile">
      <div className="box">
        <h2 className="h2 brown">Best 클래스</h2>
        <Slider {...settings} className="best-list">
  {groupedProducts.map((group, groupIndex) => (
    <div key={groupIndex} className="slide-group">
      <ul className="card-group">
        {group.map((product, index) => (
          <CardBest
            key={product.id}
            product={product}
            rank={groupIndex * 5 + index + 1}
          />
        ))}
      </ul>
    </div>
  ))}
</Slider>

      </div>
    </section>
  );
}
