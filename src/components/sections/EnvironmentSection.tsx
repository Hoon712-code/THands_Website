"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const envPhotos = [
  { src: "/images/classroom/02.jpg", alt: "넓은 교실과 송도 전경이 보이는 대형 창문" },
  { src: "/images/classroom/05.jpg", alt: "이젤과 미술 재료가 준비된 작업 테이블" },
  { src: "/images/classroom/03.jpg", alt: "도심 전경이 보이는 창가 드로잉 테이블" },
  { src: "/images/classroom/06.jpg", alt: "종이 체인 장식이 있는 넓은 교실" },
  { src: "/images/about/edu-01.jpg", alt: "학원 외관과 아이들 작품이 전시된 입구" },
  { src: "/images/classroom/04.jpg", alt: "미술 재료가 정리된 수납 공간" },
];

export function EnvironmentSection() {
  return (
    <section id="environment" className="snap-section-top">
      <div className="w-full px-4 lg:px-8 max-w-[1800px] mx-auto">
        {/* Header */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-6 lg:mb-8 text-center"
        >
          <m.p variants={fadeUp} className="section-label mb-2">
            Space
          </m.p>
          <m.h2
            variants={fadeUp}
            className="section-title text-[var(--text-h1)] mb-1"
          >
            비교하지 않는 공간에서
            <br className="hidden lg:block" />
            아이들은 더 자유롭게 표현합니다.
          </m.h2>
          <m.p variants={fadeUp} className="text-[var(--color-muted)] text-[var(--text-small)]">
            탁 트인 송도 하늘 아래, 자연광이 가득한 아뜰리에.
          </m.p>
        </m.div>

        {/* Photos — 명시적 높이 */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Top row — 큰 사진 + 작은 2장 */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 lg:gap-3 mb-2 lg:mb-3">
            <m.div variants={fadeUp} className="relative h-[250px] lg:h-[400px] overflow-hidden group">
              <Image
                src={envPhotos[0].src}
                alt={envPhotos[0].alt}
                fill
                className="object-cover photo-style group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </m.div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-3">
              <m.div variants={fadeUp} className="relative h-[160px] lg:h-[195px] overflow-hidden group">
                <Image
                  src={envPhotos[1].src}
                  alt={envPhotos[1].alt}
                  fill
                  className="object-cover photo-style group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </m.div>
              <m.div variants={fadeUp} className="relative h-[160px] lg:h-[195px] overflow-hidden group">
                <Image
                  src={envPhotos[2].src}
                  alt={envPhotos[2].alt}
                  fill
                  className="object-cover photo-style group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </m.div>
            </div>
          </div>

          {/* Bottom row — 3등분 */}
          <div className="grid grid-cols-3 gap-2 lg:gap-3">
            {envPhotos.slice(3).map((photo) => (
              <m.div key={photo.src} variants={fadeUp} className="relative h-[140px] lg:h-[220px] overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover photo-style group-hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
