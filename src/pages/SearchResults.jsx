// 페이지 로딩 구현 후
// D:\1-D-CLASS\src\pages\SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import '../assets/css/card-basic.css';
import '../assets/css/searchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState('latest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((product) => {
          const nameMatch = product.name.includes(query);
          const tagMatch = product.tag.some((t) => t.includes(query));
          return nameMatch || tagMatch;
        });
        setProducts(filtered);
      })
      .finally(() => setLoading(false));
  }, [query]);

  useEffect(() => {
    let sorted = [...products];
    if (sortBy === 'latest') {
      sorted.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    } else {
      sorted.sort((a, b) => b.wishCount - a.wishCount);
    }
    setSortedProducts(sorted);
  }, [products, sortBy]);

  return (
    <section id="search-results">
      <div className="wrap">
        <h2><strong>"{query}"</strong> 검색 결과</h2>

        <div style={{ marginBottom: 20 }}>
          <button className="sort-btn sort-latest" onClick={() => setSortBy('latest')}>최신순</button>
          <button className="sort-btn sort-recommend" onClick={() => setSortBy('popular')}>추천순</button>
        </div>

        {loading ? (
          <div className="loading-spinner">해당 클래스 가져오는 중...</div>
        ) : sortedProducts.length > 0 ? (
          <div className="product-list">
            <ul className="product-list-container">
              {sortedProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </ul>
          </div>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
