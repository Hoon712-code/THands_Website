"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  fadeUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const philosophyPoints = [
  {
    title: "정답을 따라 그리지 않습니다",
    text: "\"잘 그렸어?\"라는 질문 앞에서 아이들은 멈춥니다. 누군가의 정답을 따라 그리는 순간, 아이 안에 있던 생각은 사라집니다.",
  },
  {
    title: "스스로 관찰하고, 질문하고, 표현합니다",
    text: "미술교육학자 Viktor Lowenfeld는 \"아이의 그림은 인지 발달의 언어\"라고 했습니다. 우리는 그 언어를 존중하되, 표현의 기술이 뒷받침되도록 체계적으로 이끕니다.",
  },
  {
    title: "자유 속의 체계, 체계 안의 자유",
    text: "자유롭기만 한 수업은 성장을 담보하지 않습니다. 체계적이기만 한 수업은 생각을 가둡니다. 그 균형이 우리의 교육입니다.",
    highlight: true,
  },
];

function ScrollTypography() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.75"],
  });

  const words = "자유 속의 체계, 체계 안의 자유.".split(" ");

  return (
    <div ref={ref} className="py-8 lg:py-12">
      <p
        className="text-[var(--text-h1)] lg:text-[2.5rem] leading-[1.4] tracking-[var(--tracking-tight)] font-bold"
        aria-label="자유 속의 체계, 체계 안의 자유."
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          return (
            <ScrollWord key={i} word={word} progress={scrollYProgress} start={start} end={end} />
          );
        })}
      </p>
    </div>
  );
}

function ScrollWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ["var(--color-kraft)", "var(--color-accent-dark)"]
  );

  return (
    <m.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </m.span>
  );
}

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="snap-section-top bg-[var(--color-cream)]"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* Left — photo */}
          <m.div
            className="relative aspect-[4/3] lg:aspect-[3/4] max-h-[40vh] lg:max-h-none rounded-sm overflow-hidden shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Image
              src="/images/about/intro-01.jpg"
              alt="이젤에 앉아 작업하는 학생"
              fill
              className="object-cover photo-style"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </m.div>

          {/* Right — text */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <m.p variants={fadeUp} className="section-label mb-3">
              Philosophy
            </m.p>
            <m.h2
              variants={fadeUp}
              className="section-title text-[var(--text-h1)] mb-3"
            >
              우리가 믿는 것
            </m.h2>
            <m.p
              variants={fadeUp}
              className="text-[var(--text-h3)] text-[var(--color-primary-light)] mb-8 serif-accent"
            >
              정답을 따라 그리는 수업이 아닙니다.
            </m.p>

            <div className="space-y-6">
              {philosophyPoints.map((point, idx) => (
                <m.div
                  key={idx}
                  variants={fadeUp}
                  className={`border-l-[3px] pl-5 ${
                    point.highlight
                      ? "border-[var(--color-accent)] bg-[var(--color-accent-light)]/40 py-4 pr-4 rounded-r-sm"
                      : "border-[var(--color-border)]"
                  }`}
                >
                  <h3 className={`text-[var(--text-body)] font-bold mb-1.5 ${
                    point.highlight ? "text-[var(--color-accent-dark)]" : ""
                  }`}>
                    {point.title}
                  </h3>
                  <p className="text-[var(--text-small)] text-[var(--color-muted)] leading-[1.8]">
                    {point.text}
                  </p>
                </m.div>
              ))}
            </div>

            {/* Scroll typography — desktop only */}
            <div className="hidden lg:block">
              <ScrollTypography />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
