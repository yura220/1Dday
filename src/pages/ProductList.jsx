// D:\studio3\1-D-CLASS\src\pages\ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilterPanel from '../components/FilterPanel';
import Card from '../components/Card';
import '../assets/css/card-basic.css';
import '../assets/css/list.css';

const ProductList = () => {
  const { category } = useParams(); // URL에서 카테고리 받아오기
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: category === '전체' ? '' : category || '',
    day: '',
    level: '',
    person: '',
    tag: [],
    priceRange: [0, 100000],
  });

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // 카테고리 URL 변경 시 필터도 같이 초기화하거나 동기화
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: category === 'all' ? '' : category || '',
    }));
  }, [category]);

  // 필터가 바뀔 때마다 상품 필터링
  useEffect(() => {
    let filtered = [...products];

    // category 필터
    if (filters.category) {
      filtered = filtered.filter(
        (p) => p.category === filters.category
      );
    }

    // day 필터
    if (filters.day) {
      filtered = filtered.filter((p) => p.day === filters.day);
    }

    // level 필터
    if (filters.level) {
      filtered = filtered.filter((p) => p.level === filters.level);
    }

    // person 필터
    if (filters.person && filters.person !== '선택안함') {
      if (filters.person.endsWith('명이상')) {
        // 10명이상, 20명이상 등 처리
        const num = Number(filters.person.replace('명이상', ''));
        filtered = filtered.filter((p) => p.person >= num);
      } else {
        // 정확한 숫자 비교
        const num = Number(filters.person.replace('명', ''));
        filtered = filtered.filter((p) => p.person === num);
      }
    }

    // tag 필터 (다중 선택)
    if (filters.tag.length > 0) {
      filtered = filtered.filter((p) =>
        filters.tag.every((t) => p.tag.includes(t))
      );
    }

    // priceRange 필터
    filtered = filtered.filter(
      (p) =>
        p.price >= filters.priceRange[0] &&
        p.price <= filters.priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [filters, products]);

  // FilterPanel의 적용 버튼 콜백
  const handleApply = (newFilters) => {
    setFilters(newFilters);
  };

  // 필터 초기화 시
  const handleReset = () => {
    setFilters({
      category: category === '전체' ? '' : category || '',
      day: '',
      level: '',
      person: '',
      tag: [],
      priceRange: [0, 100000],
    });
  };

  return (
    <div id='list' className="wrap">
      {/* <h2>{category || '전체'}</h2> */}
      <FilterPanel
        onApply={handleApply}
        onReset={handleReset}
        selectedFilters={filters}
      />
      <p className='Number'>{filteredProducts.length}개의 클래스</p>

      {filteredProducts.length > 0 ? (
        <ul className="product-list-container">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>조건에 맞는 상품이 없습니다.</p>
      )}
    </div>
  );
};

export default ProductList;
