// D:\studio3\1-D-CLASS\src\components\Category.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/category.css";

const categories = ['반려동물', '뷰티', '스포츠', '쿠킹', '전체'];

const CateBtn = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (category === '전체') {
      navigate('/products/all');
    } else {
      navigate(`/products/${category}`);
    }
  };

  return (
    <section id="category">
      <div className="wrap">
          {categories.map((cat) => (
            <button key={cat} onClick={() => handleClick(cat)}>
              <span className="button-text">{cat}</span>
            </button>
          ))}
      </div>
    </section>
  );
};

export default CateBtn;