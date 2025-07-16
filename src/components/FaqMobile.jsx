import React, { useState } from 'react';
import "../assets/css/faq.css";
import "../assets/css/faqMobile.css";

const faqData = [
  {
    category: "이용 관련",
    items: [
      {
        question: '회원가입 없이도 예약할 수 있나요?',
        answer: '일부 클래스는 비회원도 예약이 가능하지만, 대부분은 회원가입이 필요합니다.',
      },
      {
        question: '클래스는 어떻게 신청하나요?',
        answer: '상단 메뉴 또는 검색을 통해 원하는 클래스를 선택 후 신청 가능합니다.',
      },
      {
        question: '결제는 어떤 방식으로 가능한가요?',
        answer: '신용카드, 카카오페이, 네이버페이 등 다양한 결제 수단을 지원합니다.',
      },
      {
        question: '예약 내역은 어디서 확인할 수 있나요?',
        answer: '마이페이지 > 예약 내역 메뉴에서 확인하실 수 있습니다.',
      },
    ]
  },
  {
    category: "취소 및 환불 관련",
    items: [
      {
        question: '클래스 예약을 취소하고 싶어요.',
        answer: '클래스 예약 취소는 예약 페이지에서 가능하며, 취소 정책에 따라 처리됩니다.',
      },
      {
        question: '환불은 언제 받을 수 있나요?',
        answer: '환불은 취소 접수 후 약 3~5영업일 이내에 처리됩니다.',
      },
      {
        question: '당일 취소도 가능한가요?',
        answer: '당일 취소는 불가능할 수 있으며, 상세 취소 정책을 참고해 주세요.',
      },
      {
        question: '클래스가 취소되면 어떻게 되나요?',
        answer: '클래스 취소 시 별도 안내드리며, 전액 환불 또는 일정 변경 옵션을 제공합니다.',
      },
    ]
  },
  {
    category: "클래스 관련",
    items: [
      {
        question: '클래스 소요 시간은 얼마나 되나요?',
        answer: '클래스마다 상이하지만 평균적으로 1시간에서 2시간 정도 소요됩니다.',
      },
      {
        question: '준비물이 필요한가요?',
        answer: '일부 클래스는 개인 준비물이 필요할 수 있으며, 상세 페이지에서 확인 가능합니다.',
      },
      {
        question: '혼자 참여해도 괜찮을까요?',
        answer: '물론입니다. 혼자 오시는 분들도 부담 없이 참여하실 수 있도록 안내해 드립니다.',
      },
      {
        question: '반려동물과 함께 참여할 수 있나요?',
        answer: '클래스에 따라 다르며, 반려동물 동반 가능 여부는 클래스 상세 정보에서 확인해 주세요.',
      },
    ]
  },
  {
    category: "개인 메뉴 관련",
    items: [
      {
        question: '관심 있는 클래스를 저장할 수 있나요?',
        answer: '네, 클래스 상세 페이지에서 찜하기 버튼을 눌러 관심 클래스로 저장할 수 있습니다.',
      },
      {
        question: '내가 찜한 클래스는 어디에서 볼 수 있나요?',
        answer: '마이페이지 > 찜한 클래스 메뉴에서 확인하실 수 있습니다.',
      },
      {
        question: '수강 완료한 클래스는 따로 표시되나요?',
        answer: '네, 수강 완료한 클래스는 마이페이지 내 이력에서 별도로 표시됩니다.',
      },
    ]
  },
  {
    category: "기타 시스템 및 정책",
    items: [
      {
        question: '운영시간은 어떻게 되나요?',
        answer: '클래스별로 운영시간이 다르며, 상세 페이지에서 확인 가능합니다. 일반적으로 오전 10시부터 오후 8시까지 운영됩니다.',
      },
      {
        question: '리뷰는 어떻게 작성하나요?',
        answer: '수강 완료 후 마이페이지 > 수강 내역에서 해당 클래스에 리뷰를 작성하실 수 있습니다.',
      },
      {
        question: '업체로 직접 문의하고 싶어요.',
        answer: '클래스 상세 페이지 하단에 있는 문의하기 버튼을 통해 업체에 직접 문의하실 수 있습니다.',
      },
      {
        question: '쿠폰이나 포인트는 어떻게 사용하나요?',
        answer: '결제 단계에서 보유 중인 쿠폰과 포인트를 적용할 수 있는 옵션이 제공됩니다.',
      },
    ]
  },
];

export default function FaqList() {
const [activeCategory, setActiveCategory] = useState(null);
const [activeQuestion, setActiveQuestion] = useState({ catIndex: null, qIndex: null });

const toggleCategory = (index) => {
  if (activeCategory === index) {
    setActiveCategory(null);
    setActiveQuestion({ catIndex: null, qIndex: null });
  } else {
    setActiveCategory(index);
    setActiveQuestion({ catIndex: null, qIndex: null });
  }
};

const toggleQuestion = (catIndex, qIndex) => {
  setActiveQuestion((prev) =>
    prev.catIndex === catIndex && prev.qIndex === qIndex
      ? { catIndex: null, qIndex: null }
      : { catIndex, qIndex }
  );
};


  return (
  <section id='faq-m'>
    <div className="wrap">
      <div className='title'>
        <h2 className="h2">FAQ</h2>
        <a href="#" className='faq-btn'>1:1 문의하기</a>
      </div>
      {faqData.map((cat, catIndex) => (
        <div key={catIndex} className="faq-category">
          <button
            className={`category-title ${activeCategory === catIndex ? "active" : ""}`}
            onClick={() => toggleCategory(catIndex)}
          >
            {cat.category}
            <span className="faqList-icon">
              <img
                src={
                  activeCategory === catIndex
                    ? "/img/up.png"
                    : "/img/down.png"
                }
                alt="토글 아이콘"
              />
            </span>
          </button>

          {activeCategory === catIndex && (
            <ul className="faq-questions">
              {cat.items.map((item, qIndex) => (
                <li
                  key={qIndex}
                  className={`faq-question-item ${
                    activeQuestion.catIndex === catIndex && activeQuestion.qIndex === qIndex
                      ? 'active'
                      : ''
                  }`}
                >
                  <button
                    className="question-title"
                    onClick={() => toggleQuestion(catIndex, qIndex)}
                  >
                    {item.question}
                    <span className="faqList-icon">
                      <img
                        src={
                          activeQuestion.catIndex === catIndex && activeQuestion.qIndex === qIndex
                            ? "/img/minus.png"
                            : "/img/plus.png"
                        }
                        alt="질문 토글 아이콘"
                      />
                    </span>
                  </button>

                  {activeQuestion.catIndex === catIndex && activeQuestion.qIndex === qIndex && (
                    <div className="answer">{item.answer}</div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    </section>
  );
}
