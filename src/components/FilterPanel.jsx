// D:\studio3\1-D-CLASS\src\components\FilterPanel.jsx
import React, { useState } from 'react';
import '../assets/css/FilterPanel.css';

const categories = ['반려동물', '뷰티', '스포츠', '쿠킹'];
const days = ['평일', '주말'];
const levels = ['입문', '중급', '고급'];
const tags = ['선물용', '친구랑', '데이트', '포토존', '키즈가능', '펫동반', '야외클래스', '야간클래스', '1:1'];

const FilterPanel = ({ onApply, onReset, selectedFilters }) => {
  // 지역 상태로도 관리 가능하지만 최종 필터값은 부모에서 관리할 예정
  const [filters, setFilters] = useState({
    category: selectedFilters?.category || '',
    day: selectedFilters?.day || '',
    level: selectedFilters?.level || '',
    person: selectedFilters?.person || '',
    tag: selectedFilters?.tag || [],
    priceRange: selectedFilters?.priceRange || [0, 100000], // 기본 범위 예시
  });

  // 각 필터 상태 업데이트 함수
  const toggleTag = (tag) => {
    setFilters((prev) => {
      const newTags = prev.tag.includes(tag)
        ? prev.tag.filter((t) => t !== tag)
        : [...prev.tag, tag];
      return { ...prev, tag: newTags };
    });
  };

  // 가격 범위 입력 처리
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newRange = [...prev.priceRange];
      if (name === 'min') newRange[0] = Number(value);
      else if (name === 'max') newRange[1] = Number(value);
      return { ...prev, priceRange: newRange };
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <h4>카테고리</h4>
        {categories.map((cat) => (
          <button
            key={cat}
            className={filters.category === cat ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                category: prev.category === cat ? '' : cat
              }))
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h4>요일</h4>
        {days.map((day) => (
          <button
            key={day}
            className={filters.day === day ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                day: prev.day === day ? '' : day
              }))
            }
          >
            {day}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h4>난이도</h4>
        {levels.map((level) => (
          <button
            key={level}
            className={filters.level === level ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                level: prev.level === level ? '' : level
              }))
            }
          >
            {level}
          </button>
        ))}
      </div>

      {/* <div className="filter-group">
        <h4>인원</h4>
        {persons.map((person) => (
          <button
            key={person}
            className={filters.person === person ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                person: prev.person === person ? '' : person
              }))
            }
          >
            {person}
          </button>
        ))}
      </div> */}

      <div className="filter-group">
        <h4>태그</h4>
        {tags.map((tag) => (
          <button
            key={tag}
            className={filters.tag.includes(tag) ? 'active' : ''}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="filter-group price-range">
        <h4>금액</h4>
        <input
          type="number"
          name="min"
          value={filters.priceRange[0]}
          onChange={handlePriceChange}
          placeholder="최소금액"
          min={0}
        />
        <span>{' ~ '}</span>
        <input
          type="number"
          name="max"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          placeholder="최고금액"
          min={0}
        />
      </div>

      <div className="filter-actions">
        <button onClick={() => onApply(filters)}>적용하기</button>
        <button
          onClick={() => {
            setFilters({
              category: '',
              day: '',
              level: '',
              person: '',
              tag: [],
              priceRange: [0, 100000],
            });
            if (onReset) onReset();
          }}
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
