// src/context/WishContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const WishContext = createContext();

export const WishProvider = ({ children }) => {
  // 🔹 localStorage에서 초기 찜 목록 불러오기
  const [wishList, setWishList] = useState(() => {
    const stored = localStorage.getItem('wishList');
    return stored ? JSON.parse(stored) : [];
  });

  // 🔹 찜 목록이 바뀔 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }, [wishList]);

  const toggleWish = (product) => {
    setWishList((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isWished = (id) => wishList.some((item) => item.id === id);

  return (
    <WishContext.Provider value={{ wishList, toggleWish, isWished }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => useContext(WishContext);
