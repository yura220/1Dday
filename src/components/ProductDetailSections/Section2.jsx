// Section2.jsx
import React, { forwardRef } from 'react';

const Section2 = forwardRef((props, ref) => (
  <section className="wrap product-section" id="section2" ref={ref}>
  <h2>커리큘럼 안내</h2>
<ul class="curriculum-list">
  <li>
    <strong><span class="step-label">STEP1.</span> 클래스 소개 및 아이스브레이킹</strong>
    <p>강사 및 참여자 간 간단한 자기소개</p>
    <p>강아지 장난감 제작 클래스 개요 설명</p>
  </li>

  <li>
    <strong><span class="step-label">STEP2.</span> 반려견 성향 이해하기 (5분)</strong>
    <p>활동적인 강아지 vs. 조용한 강아지</p>
    <p>어떤 장난감이 적합할지 간단히 알아보기</p>
  </li>

  <li>
    <strong><span class="step-label">STEP3.</span> 재료 소개 및 도구 사용법 익히기 (10분)</strong>
    <p>안전한 원단, 충전재, 바느질 키트 소개</p>
    <p>기본 바느질 방법 시연</p>
  </li>

  <li>
    <strong><span class="step-label">STEP4.</span> 장난감 디자인 선택 & 밑그림 그리기 (15분)</strong>
    <p>준비된 디자인 중 선택 or 자유 디자인</p>
    <p>강아지 이름 자수 위치 등 정하기</p>
  </li>

  <li>
    <strong><span class="step-label">STEP5.</span> 장난감 제작 시작 (60분)</strong>
    <p>재단, 바느질, 충전재 채우기 등 순차적 제작</p>
    <p>강사의 도움 아래 1:1 코칭 진행</p>
  </li>

  <li>
    <strong><span class="step-label">STEP6.</span> 디테일 마감 및 꾸미기 (15분)</strong>
    <p>자수 넣기, 리본/태그 부착 등</p>
    <p>완성 후 촬영 포인트 잡기</p>
  </li>

  <li>
    <strong><span class="step-label">STEP7.</span> 완성품 공유 & 포토타임 (10분)</strong>
    <p>서로 만든 장난감 소개</p>
    <p>반려견 사진 or 완성품 인증샷 촬영</p>
  </li>

  <li>
    <strong><span class="step-label">STEP8.</span> 포장 및 클래스 마무리 (5분)</strong>
    <p>선물 포장지 제공</p>
    <p>후기 작성 안내 및 다음 클래스 소개</p>
  </li>
</ul>

  </section>
));

export default Section2;