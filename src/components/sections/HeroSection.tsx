"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/intro-02.jpg"
          alt="아이들이 벽면 캔버스에 그림을 그리고 있는 수업 장면"
          fill
          className="object-cover photo-style scale-105"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-[var(--grid-margin)] text-center text-white">
        {/* Logo */}
        <m.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <Image
            src="/images/logo/logo.png"
            alt="생각하는 손 로고"
            width={88}
            height={88}
            className="mx-auto rounded-full shadow-lg"
            priority
          />
        </m.div>

        {/* Headline */}
        <m.h1
          id="hero-headline"
          className="text-[var(--text-display)] lg:text-[3.5rem] font-bold leading-[1.15] mb-6 tracking-[var(--tracking-tight)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          아이의 생각이 사라지지 않도록,
          <br />
          <span className="text-[var(--color-accent-light)]">
            그것이 탄탄한 실력으로
          </span>{" "}
          이어질 수 있도록.
        </m.h1>

        {/* Sub copy */}
        <m.p
          className="text-lg lg:text-xl text-white/75 max-w-lg mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
        >
          사고력 기반 미술교육 — 송도 생각하는 손 미술학원
        </m.p>

        {/* CTAs */}
        <m.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.8 }}
        >
          <Button href="#cta" size="lg">체험수업 신청</Button>
          <Button
            href="#philosophy"
            variant="secondary"
            size="lg"
            className="!border-white/50 !text-white hover:!bg-white/15 hover:!text-white"
          >
            교육 철학 알아보기
          </Button>
        </m.div>
      </div>

      {/* Scroll indicator */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} aria-hidden="true" />
        </m.div>
      </m.div>
    </section>
  );
}
