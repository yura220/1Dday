import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "../assets/css/title.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Title() {
  const [loaded, setLoaded] = useState(false);

  // 슬라이드 이미지 로딩 확인
  useEffect(() => {
    const images = document.querySelectorAll('.title-slide img');
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoaded(true);
          }
        });
      }
    });

    if (loadedCount === images.length) {
      setLoaded(true);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
    adaptiveHeight: false,
    customPaging: (i) => <span className="custom-dot">{i + 1} / 3</span>,
    appendDots: (dots) => <ul className="slick-dots">{dots}</ul>,
  };

  return (
    <div id="title">
      <div className="box">
        {loaded && (
          <Slider {...settings} className="title-slide">
            <div>
              <picture>
                <source srcSet="/img/m-title1.jpg" media="(max-width: 768px)" />
                <img src="/img/title1.jpg" alt="취미 클래스 소개 이미지 1" />
              </picture>
              <h2 className="h2">
                취미가 <br className="br-m" />시작되는 하루,<br />1:D CLASS
              </h2>
            </div>
            <div>
              <picture>
                <source srcSet="/img/m-title2.jpg" media="(max-width: 768px)" />
                <img src="/img/title2.jpg" alt="취미 클래스 소개 이미지 2" />
              </picture>
              <h2 className="h2">
                1일, 1클래스.<br />당신만의 취향을 <br className="br-m" />찾는 시간
              </h2>
            </div>
            <div>
              <picture>
                <source srcSet="/img/m-title3.jpg" media="(max-width: 768px)" />
                <img src="/img/title3.jpg" alt="취미 클래스 소개 이미지 3" />
              </picture>
              <h2 className="h2">
                지금, 나를 위한<br />시간을 열어보세요
              </h2>
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
}
