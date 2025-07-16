import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import Login from '../pages/Login';
import Sign from '../pages/Sign';
import ProductList from '../pages/ProductList';
import Faq from '../pages/Faq';
import FaqMobile from "../components/FaqMobile";
import SearchMobile from "../components/SearchMobile";
import WishListPage from '../pages/WishListPage';
import ProductDetail from '../pages/ProductDetail';

export default function AppRouter() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/review" element={<Review />} /> */}
      <Route path="/search" element={<SearchResults />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/faq" element={isMobile ? <FaqMobile /> : <Faq />} />
      <Route path="/search-mobile" element={<SearchMobile />} />
    </Routes>
  );
}
