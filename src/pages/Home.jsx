import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Category from '../components/Category';
import New from '../components/New';
import NewMobile from '../components/NewMobile';
import Review from '../components/Review';
import Best from '../components/Best';
import BestMobile from '../components/BestMobile';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Title />
      <Category />
      {isMobile ? <NewMobile /> : <New />}
      <Review />
      {isMobile ? <BestMobile /> : <Best />}

    </>
  );
}
