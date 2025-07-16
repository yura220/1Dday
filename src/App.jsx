import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router';
import ScrollToTop from "./components/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function AppLayout() {
  const location = useLocation();
  const hiddenPaths = ['/search-mobile']; // 이 경로에서는 Header/Footer 숨김
  const shouldHideHeaderFooter = hiddenPaths.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!shouldHideHeaderFooter && <Header />}
      <AppRouter />
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
