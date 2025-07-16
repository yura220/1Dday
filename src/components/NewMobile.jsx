import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Card from '../components/CardMobile';
import "../assets/css/new.css";
import "../assets/css/new-mobile.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function New() {
  const [newProducts, setNewProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setNewProducts(sorted.slice(0, 8));
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

useEffect(() => {
  if (isMobile) {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}, [isMobile]);

  const slickSettings = {
  dots: true,
  infinite: false,
  speed: 300,
  rows: 2,
  slidesPerRow: 2,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,         // 자동 넘김 끔
  swipe: true,             // 모바일 터치 슬라이드 가능
  draggable: true,         // 마우스 드래그도 가능
  arrows: false
};

  return (
    <section id="new">
      <div className="box">
        <h2 className="h2 brown">NEW 클래스</h2>
        {isMobile ? (
          <Slider {...slickSettings} className="new-list">
            {newProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </Slider>
        ) : (
          <div className="new-list">
            {newProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
