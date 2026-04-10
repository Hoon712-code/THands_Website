import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import localFont from "next/font/local";
import { siteMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { MotionProvider } from "@/components/layout/MotionProvider";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  fallback: ["Georgia", "serif"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${notoSerifKR.variable} antialiased`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <JsonLd />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
