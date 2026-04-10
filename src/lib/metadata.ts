import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thinking-hands.kr";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "생각하는 손 미술학원 | 송도 5공구 미술학원 | 아동미술 체험수업",
    template: "%s | 생각하는 손 미술학원",
  },

  description:
    "송도 에스파이브시티 B동 위치. 사고력 기반 아동미술 교육 — 유치부부터 중학생까지. " +
    "드로잉 70% + 융합미술 30%의 체계적 커리큘럼. 첨단초·송명초·해송초 인근. 체험수업 접수 중.",

  keywords: [
    "송도미술학원",
    "송도5공구미술학원",
    "에스파이브시티미술학원",
    "인천미술학원",
    "아동미술",
    "유치부미술",
    "초등미술",
    "체험수업",
    "송도아동미술",
    "연수구미술학원",
    "첨단초미술",
    "송명초미술",
    "해송초미술",
    "사고력미술",
    "드로잉수업",
  ],

  authors: [{ name: "생각하는 손 미술학원" }],
  creator: "생각하는 손 미술학원",
  publisher: "생각하는 손 미술학원",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "생각하는 손 미술학원",
    title: "생각하는 손 미술학원 | 송도 5공구 아동미술 체험수업",
    description:
      "아이의 생각이 사라지지 않도록, 그것이 탄탄한 실력으로 이어질 수 있도록. " +
      "송도 에스파이브시티 B동 — 유치부~중학생 사고력 기반 미술교육.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "생각하는 손 미술학원 — 송도 사고력 기반 아동미술",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "생각하는 손 미술학원 | 송도 5공구 아동미술",
    description: "사고력 기반 아동미술 교육. 체험수업 접수 중.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
