"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";

const stepImages = [
  "/images/about/intro-03.jpg",
  "/images/about/edu-04.jpg",
  "/images/about/edu-05.jpg",
  "/images/about/edu-03.jpg",
];

const stepImageAlts = [
  "아이들이 바닥에 모여 주제를 탐색하는 장면",
  "소의 형태를 다양한 시각으로 관찰하고 그린 드로잉",
  "재료를 직접 다루며 표현하는 아이의 손",
  "완성된 수채화 인물 작품",
];

export function ProcessSection() {
  return (
    <section id="process" className="snap-section-top">
      <div className="container-main">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <m.p variants={fadeUp} className="section-label mb-3">
            Process
          </m.p>
          <m.h2
            variants={fadeUp}
            className="section-title text-[var(--text-h1)] mb-3"
          >
            하나의 수업이 만들어지는 과정
          </m.h2>
          <m.p variants={fadeUp} className="text-[var(--color-muted)] max-w-lg mx-auto">
            네 단계를 거쳐, 아이의 생각이 작품이 됩니다.
          </m.p>
        </m.div>

        {/* 4 step cards with connecting line */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-px bg-[var(--color-border)]" />

          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {PROCESS_STEPS.map((step, i) => (
              <m.div
                key={step.step}
                variants={fadeUp}
                className="group text-center"
              >
                {/* Step image — circle crop */}
                <div className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px] mx-auto mb-4 rounded-full overflow-hidden border-3 border-[var(--color-accent-light)] shadow-md">
                  <Image
                    src={stepImages[i]}
                    alt={stepImageAlts[i]}
                    fill
                    className="object-cover photo-style group-hover:scale-110 transition-transform duration-500"
                    sizes="200px"
                  />
                  {/* Step number badge */}
                  <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold shadow-md border-2 border-white">
                    {step.step}
                  </div>
                </div>

                {/* Step content */}
                <h3 className="text-[var(--text-h3)] font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--text-small)] text-[var(--color-muted)] leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
