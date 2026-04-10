export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thinking-hands.kr";

export const ACADEMY = {
  name: "생각하는 손 미술학원",
  nameEn: "Thinking Hands Art Studio",
  phone: "010-8212-6889",
  phoneFormatted: "+82-10-8212-6889",
  address: "인천광역시 연수구 송도 에스파이브시티 B동 704호",
  addressShort: "송도 에스파이브시티 B동 704호 (7층)",
  instagram: "https://www.instagram.com/thinking_hands_",
  blog: "https://blog.naver.com/thinking_hands_",
  naverMap: "https://naver.me/thinking-hands",
  coordinates: { lat: 37.3805, lng: 126.6575 },
  hours: {
    weekday: "오후 2시 ~ 오후 8시",
    saturday: "오전 10시 ~ 오후 5시",
    sunday: "휴무",
  },
} as const;

export const NAV_ITEMS = [
  { label: "교육철학", href: "#philosophy" },
  { label: "수업안내", href: "#process" },
  { label: "성장갤러리", href: "#gallery" },
  { label: "원장소개", href: "#location" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  philosophy: "philosophy",
  process: "process",
  curriculum: "curriculum",
  gallery: "gallery",
  location: "location",
  environment: "environment",
  info: "info",
  cta: "cta",
  footer: "footer",
} as const;

export const CURRICULUM = [
  {
    level: "기초",
    target: "유치 ~ 초등 저학년",
    focus: "감각 탐색, 자유 드로잉, 재료 경험",
    description:
      "다양한 재료와 감각 경험을 통해 미술의 즐거움을 발견합니다. 아이 안에 있는 이미지를 자유롭게 끄집어내는 단계입니다.",
    duration: "60분",
  },
  {
    level: "확장",
    target: "초등 중 ~ 고학년",
    focus: "관찰 드로잉, 구도와 색채, 주제 해석",
    description:
      "관찰력과 표현력을 체계적으로 키웁니다. 단순히 보이는 것을 그리는 것이 아니라, 생각하고 해석하는 드로잉을 합니다.",
    duration: "90분",
  },
  {
    level: "심화",
    target: "중학생",
    focus: "작품 기획, 포트폴리오 구성, 비평적 사고",
    description:
      "작품 기획부터 포트폴리오 구성까지. 자신만의 시각 언어를 만들어가는 단계입니다.",
    duration: "120분",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "주제 탐색",
    description:
      "하나의 주제를 여러 감각으로 탐색합니다. 사진, 이야기, 실물 관찰을 통해 아이 안에 이미지를 쌓습니다.",
  },
  {
    step: "02",
    title: "질문 확장",
    description:
      '"이건 왜 이런 모양일까?" — 선생님의 질문이 아이의 생각을 넓힙니다.',
  },
  {
    step: "03",
    title: "표현 구체화",
    description:
      "아이의 생각을 기술적으로 구현합니다. 드로잉 기초, 구도, 색채.",
  },
  {
    step: "04",
    title: "작업 이야기",
    description: "완성된 작품에 대해 아이가 직접 이야기합니다.",
  },
] as const;
