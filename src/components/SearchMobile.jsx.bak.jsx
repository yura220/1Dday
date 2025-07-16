import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/searchMobile.css";

const hotKeywords = ["베이킹", "향수", "케이크", "메이크업", "반지", "꽃꽂이", "재봉", "떡", "키링", "도자기"];

export default function SearchMobile() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search?search=${encodeURIComponent(query)}`);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div id="search-mobile" className="wrap">
      <div className="search-header">
        <button className="search-btn" onClick={handleSearch}>
          검색
        </button>
        <input
          type="text"
          placeholder="관심 주제, 클래스, 튜터 찾기"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button className="close-btn" onClick={handleClose}>
          닫기
        </button>
      </div>

      <div className="popular-keywords">
        <p className="title">가장 많이 검색했어요</p>
        <ul>
          {hotKeywords.map((word, index) => (
          <li key={index}>
            <span className="rank">{index + 1}</span>{" "}
            <span
              className="keyword"
              onClick={() => navigate(`/search?search=${encodeURIComponent(word)}`)}
              style={{ cursor: "pointer" }}
            >
              {word}
            </span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
