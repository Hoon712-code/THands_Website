"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ACADEMY } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const galleryItems = [
  { src: "/images/about/edu-03.jpg", alt: "수채화 인물 작품", label: "수채화 인물", sublabel: "확장반" },
  { src: "/images/about/edu-04.jpg", alt: "관찰 드로잉", label: "관찰 드로잉", sublabel: "확장반" },
  { src: "/images/about/edu-05.jpg", alt: "판화 작업", label: "혼합 매체", sublabel: "기초반" },
  { src: "/images/about/edu-02.jpg", alt: "인체 드로잉", label: "인체 드로잉", sublabel: "심화반" },
  { src: "/images/about/intro-03.jpg", alt: "협동 활동", label: "협동 활동", sublabel: "기초반" },
  { src: "/images/about/intro-01.jpg", alt: "이젤 작업", label: "이젤 작업", sublabel: "전 과정" },
  { src: "/images/classroom/07.jpg", alt: "수업 풍경", label: "수업 풍경", sublabel: "전 과정" },
  { src: "/images/about/intro-02.jpg", alt: "벽면 드로잉", label: "벽면 드로잉", sublabel: "기초반" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="snap-section-top bg-[var(--color-cream)]">
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
            Gallery
          </m.p>
          <m.h2
            variants={fadeUp}
            className="section-title text-[var(--text-h1)] mb-1"
          >
            &ldquo;계속하는 아이&rdquo;는 반드시 자랍니다.
          </m.h2>
          <m.p variants={fadeUp} className="text-[var(--color-muted)] text-[var(--text-small)]">
            실제 수업에서 탄생한 작품들입니다.
          </m.p>
        </m.div>

        {/* Photo grid — 명시적 높이 */}
        <m.div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {galleryItems.map((item) => (
            <m.div
              key={item.src}
              variants={fadeUp}
              className="group relative overflow-hidden h-[180px] sm:h-[220px] lg:h-[280px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover photo-style group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3">
                  <p className="text-white text-sm font-bold">{item.label}</p>
                  <p className="text-white/70 text-xs">{item.sublabel}</p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 pt-6">
          <Button href={ACADEMY.instagram} variant="text" className="inline-flex items-center gap-2 text-[var(--text-small)]">
            인스타그램 <ExternalLink size={13} />
          </Button>
          <span className="text-[var(--color-border)]">|</span>
          <Button href={ACADEMY.blog} variant="text" className="inline-flex items-center gap-2 text-[var(--text-small)]">
            블로그 <ExternalLink size={13} />
          </Button>
        </div>
      </div>
    </section>
  );
}
