"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CURRICULUM } from "@/lib/constants";
import { Clock } from "lucide-react";

const curriculumImages = [
  "/images/about/intro-03.jpg",
  "/images/about/edu-02.jpg",
  "/images/about/edu-03.jpg",
];

const curriculumImageAlts = [
  "바닥에 모여 자유롭게 탐색하는 아이들",
  "인체 드로잉과 관찰 드로잉 작품",
  "완성도 높은 수채화 인물 작품",
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="snap-section-top bg-[var(--color-cream)]">
      <div className="container-main">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <m.p variants={fadeUp} className="section-label mb-3">
            Curriculum
          </m.p>
          <m.h2
            variants={fadeUp}
            className="section-title text-[var(--text-h1)] mb-3"
          >
            드로잉 70%, 융합미술 30%.
          </m.h2>
          <m.p variants={fadeUp} className="text-[var(--color-muted)] max-w-lg mx-auto">
            비율까지 공개하는 이유가 있습니다.
          </m.p>
        </m.div>

        <m.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {CURRICULUM.map((item, i) => (
            <m.div
              key={item.level}
              variants={fadeUp}
              className="bg-[var(--color-warm-white)] border border-[var(--color-border)] overflow-hidden rounded-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-[var(--duration-normal)] group"
            >
              {/* Curriculum level image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={curriculumImages[i]}
                  alt={curriculumImageAlts[i]}
                  fill
                  className="object-cover photo-style group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[var(--text-xs)] font-bold text-white bg-[var(--color-accent)] px-3 py-1.5 rounded-sm shadow-sm">
                    {item.level}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <h3 className="text-[var(--text-h3)] font-bold mb-2">
                  {item.target}
                </h3>

                <p className="text-[var(--text-small)] text-[var(--color-muted)] mb-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-[var(--text-small)] text-[var(--color-primary)] font-medium mb-2">
                    {item.focus}
                  </p>
                  <p className="flex items-center gap-1.5 text-[var(--text-xs)] text-[var(--color-muted)]">
                    <Clock size={14} />
                    수업 {item.duration}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
