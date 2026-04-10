const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thinking-hands.kr";

function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: "생각하는 손 미술학원",
        alternateName: "Thinking Hands Art Studio",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/opengraph-image`,
        description:
          "사고력 기반 아동미술 교육. 드로잉 70% + 융합미술 30%의 체계적 커리큘럼으로 유치부부터 중학생까지 가르칩니다.",
        telephone: "+82-10-8212-6889",
        foundingDate: "2024",
        address: {
          "@type": "PostalAddress",
          streetAddress: "송도 에스파이브시티 B동 704호",
          addressLocality: "연수구",
          addressRegion: "인천광역시",
          postalCode: "21984",
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.3805,
          longitude: 126.6575,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "14:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "17:00",
          },
        ],
        sameAs: [
          "https://blog.naver.com/thinking_hands_",
          "https://www.instagram.com/thinking_hands_",
        ],
        areaServed: {
          "@type": "City",
          name: "인천광역시 연수구",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "미술 수업 프로그램",
          itemListElement: [
            { "@type": "OfferCatalog", name: "기초 과정 (유치~초등 저학년)" },
            { "@type": "OfferCatalog", name: "확장 과정 (초등 중~고학년)" },
            { "@type": "OfferCatalog", name: "심화 과정 (중학생)" },
          ],
        },
      },
      {
        "@type": "Course",
        "@id": `${SITE_URL}/#course-basic`,
        name: "기초 과정 — 감각 탐색과 자유 드로잉",
        description:
          "유치원생~초등 저학년 대상. 다양한 재료 경험과 자유 드로잉을 통해 미술의 즐거움을 발견합니다.",
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: "유치원생 ~ 초등 저학년",
        teaches: "감각 탐색, 자유 드로잉, 재료 경험",
        coursePrerequisites: "없음 (미술 경험 불문)",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          duration: "PT60M",
          instructor: { "@id": `${SITE_URL}/#person-director` },
        },
      },
      {
        "@type": "Course",
        "@id": `${SITE_URL}/#course-expansion`,
        name: "확장 과정 — 관찰 드로잉과 주제 해석",
        description:
          "초등 중~고학년 대상. 관찰 드로잉, 구도와 색채 이해, 주제 해석 능력을 체계적으로 키웁니다.",
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: "초등 중학년 ~ 고학년",
        teaches: "관찰 드로잉, 구도, 색채, 주제 해석",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          duration: "PT90M",
          instructor: { "@id": `${SITE_URL}/#person-director` },
        },
      },
      {
        "@type": "Course",
        "@id": `${SITE_URL}/#course-advanced`,
        name: "심화 과정 — 작품 기획과 포트폴리오",
        description:
          "중학생 대상. 작품 기획부터 포트폴리오 구성까지, 비평적 사고와 표현력을 함께 키웁니다.",
        provider: { "@id": `${SITE_URL}/#organization` },
        educationalLevel: "중학생",
        teaches: "작품 기획, 포트폴리오 구성, 비평적 사고",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          duration: "PT120M",
          instructor: { "@id": `${SITE_URL}/#person-director` },
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-director`,
        name: "원장",
        jobTitle: "원장 / 미술교육가",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        description:
          "미술교육학 전공. 예술영재교육원 지도 경험. 아이의 사고력과 표현력을 균형 있게 키우는 교육을 실천합니다.",
        knowsAbout: [
          "아동미술교육",
          "미술교육학",
          "드로잉 교육",
          "창의성 교육",
          "포트폴리오 지도",
        ],
        sameAs: [
          "https://blog.naver.com/thinking_hands_",
          "https://www.instagram.com/thinking_hands_",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "체험수업은 어떻게 신청하나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "홈페이지 체험수업 신청 버튼 또는 전화(010-8212-6889)로 신청하실 수 있습니다. 아이의 나이와 희망 요일을 알려주시면 맞춤 체험수업을 안내해 드립니다.",
            },
          },
          {
            "@type": "Question",
            name: "몇 살부터 수업이 가능한가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "유치원생(5세)부터 중학생까지 가능합니다. 기초(유치~초등 저), 확장(초등 중~고), 심화(중학생) 3단계로 나뉘어 연령과 수준에 맞는 수업을 진행합니다.",
            },
          },
          {
            "@type": "Question",
            name: "수업 시간은 어떻게 되나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "60분, 90분, 120분 중 선택 가능하며, 주 1~3회 수업합니다. 평일 오후 2시~8시, 토요일 오전 10시~오후 5시 운영합니다.",
            },
          },
          {
            "@type": "Question",
            name: "주차가 가능한가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "에스파이브시티 A동, B동 지하주차장 이용 가능합니다. B동 엘리베이터를 이용해 7층으로 올라오시면 됩니다.",
            },
          },
          {
            "@type": "Question",
            name: "생각하는 손은 다른 미술학원과 무엇이 다른가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "따라 그리기 위주의 수업이 아닌, 아이가 스스로 관찰하고 질문하고 표현하는 사고력 기반 미술교육을 합니다. 드로잉 70% + 융합미술 30%의 비율로 기초 실력과 창의적 사고를 균형 있게 키웁니다.",
            },
          },
          {
            "@type": "Question",
            name: "인근 어떤 학교 학생들이 다니나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "첨단초, 송명초, 해송초 등 송도 5공구 인근 학교 학생들이 주로 다니고 있습니다.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "생각하는 손 미술학원",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "ko-KR",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "생각하는 손 미술학원 | 송도 5공구 미술학원 | 아동미술 체험수업",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        description:
          "송도 에스파이브시티 위치. 사고력 기반 아동미술 교육 — 유치부부터 중학생까지.",
        inLanguage: "ko-KR",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#hero-headline",
            "#philosophy-summary",
            "#program-summary",
          ],
        },
      },
    ],
  };
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
    />
  );
}
