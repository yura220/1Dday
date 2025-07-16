import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import WishBtn from '../components/WishBtn';
import Section1 from '../components/ProductDetailSections/Section1';
import Section2 from '../components/ProductDetailSections/Section2';
import Section3 from '../components/ProductDetailSections/Section3';
import Section4 from '../components/ProductDetailSections/Section4';
import 'react-calendar/dist/Calendar.css';
import '../assets/css/productDetail.css';
import '../assets/css/productSection.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState('section1');

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const tabRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => {
        console.error('상품 데이터 로드 실패:', err);
      });
  }, [id]);

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d
      .getDate()
      .toString()
      .padStart(2, '0')}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };

  const handlePlus = () => {
    if (count < product.person) setCount(count + 1);
  };

  const scrollToSection = (id) => {
    const section = sectionRefs[id]?.current;
    if (section) {
      const headerHeight = 80;
      const tabHeight = 66;
      const scrollY = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - tabHeight;
      window.scrollTo({ top: scrollY, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <>
      <section id="detailTitle">
        <div className="wrap">
          <div className="img">
            <img src={product.mainImg} alt={product.name} />
          </div>

          <div className="info">
            <ul>
              <li>{product.category}</li>
              <li>{product.duration}</li>
              <li>{product.level}</li>
              <li>1~{product.person}명</li>
            </ul>
          </div>

          <div className="reservation">
            <h2>{product.name}</h2>
            <ul className="product-info">
              <li className="review">{product.reviewCount}</li>
              <li className="wish">{product.wishCount}</li>
              <li className="place">서울 성수 / 펫공방 스튜디오</li>
            </ul>
            <div className="date">
              <button onClick={() => setShowCalendar(!showCalendar)}>
                <span>{selectedDate ? formatDate(selectedDate) : formatDate(new Date())}</span>
              </button>
              {showCalendar && (
                <Calendar
                  onChange={handleDateChange}
                  value={new Date()}
                  formatDay={(locale, date) => date.getDate()}
                  tileClassName={({ date }) => (date.getDay() === 6 ? 'saturday' : null)}
                />
              )}
            </div>
            <div className="notice">
              <strong>클래스 신청 전, 확인해주세요!</strong>
              <p>
                제공 키트: 원단, 실, 바늘, 인형 속솜, 삑삑이 부자재 등<br />
                완성품: 패브릭 장난감 1종 (이름 자수 선택 가능)<br />
                특징: 완성 후 포장까지 제공 / 반려견용 안전 소재 사용
              </p>
              <p>
                실내에서는 음료를 마시거나 시식을 하지 않으며, 공방 테라스<br />
                에서 시식 및 음료(물포함)를 드실 수 있게 안내해드립니다
              </p>
              <p>**예약시간에 맞춰서 늦지 않게 도착 부탁바랍니다:)</p>
            </div>
            <div className="tags">
              {product.tag.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            <div className="person">
              <span>인원</span>
              <button onClick={handleMinus}>-</button>
              <span className="personCount">{count}</span>
              <button onClick={handlePlus}>+</button>
            </div>
            <p className="price">{(product.price * count).toLocaleString()}원</p>
            <div className="btns">
              <WishBtn product={product} iconType="gray" />
              <button className="faqBtn"></button>
              <button className="applyBtn">클래스 신청하기</button>
            </div>
          </div>
        </div>
      </section>

      <div className="detail-body">
        <div className="tab" ref={tabRef}>
          <nav className="tab-nav">
            <ul>
              <li className={activeTab === 'section1' ? 'active' : ''} onClick={() => scrollToSection('section1')}>클래스 소개</li>
              <li className={activeTab === 'section2' ? 'active' : ''} onClick={() => scrollToSection('section2')}>커리큘럼</li>
              <li className={activeTab === 'section3' ? 'active' : ''} onClick={() => scrollToSection('section3')}>튜터 소개</li>
              <li className={activeTab === 'section4' ? 'active' : ''} onClick={() => scrollToSection('section4')}>후기</li>
            </ul>
          </nav>
        </div>

        <div style={{ height: '66px' }}></div>

        <Section1 ref={sectionRefs.section1} />
        <Section2 ref={sectionRefs.section2} />
        <Section3 ref={sectionRefs.section3} />
        <Section4 ref={sectionRefs.section4} />
      </div>
    </>
  );
};

export default ProductDetail;
