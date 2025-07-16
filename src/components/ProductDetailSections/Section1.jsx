// Section1.jsx
import React, { forwardRef } from 'react';

const Section1 = forwardRef((props, ref) => (
  <section className="wrap product-section" id="section1" ref={ref}>
    <h2>클래스 소개</h2>
    <p>
      손으로 만드는 첫 장난감, 우리 강아지에게<br />
      세상에서 단 하나뿐인 장난감을,<br />
      내 손으로 직접 만들어 강아지에게 선물해보세요.<br />
      바느질이 서툴러도 괜찮아요.
    </p>
    <p>
      폭신한 원단과 안전한 소재로 준비된<br />
      입문자용 키트를 통해 누구나 쉽게 완성할 수 있어요.
    </p>
    <p>
      장난감을 만들며 내 반려견을 더 깊이 이해하고,<br />
      완성 후에는 선물하는 기쁨까지 함께 경험해보세요.<br />
      우리 아이가 제일 좋아하는 장난감이 될지도 몰라요!
    </p>
  </section>
));

export default Section1;