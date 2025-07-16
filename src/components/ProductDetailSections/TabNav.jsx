const TabNav = ({ scrollToSection, isSticky, tabRef }) => {
  return (
    <nav ref={tabRef} className={`tab-nav ${isSticky ? 'fixed-tab' : ''}`}>
      <ul>
        <li onClick={() => scrollToSection('section1')}>클래스 소개</li>
        <li onClick={() => scrollToSection('section2')}>커리큘럼</li>
        <li onClick={() => scrollToSection('section3')}>튜터 소개</li>
        <li onClick={() => scrollToSection('section4')}>후기</li>
      </ul>
    </nav>
  );
};

export default TabNav;
