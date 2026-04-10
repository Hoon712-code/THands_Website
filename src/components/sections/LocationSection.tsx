"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ACADEMY } from "@/lib/constants";
import { MapPin, Car, Train, Clock, Phone, Users } from "lucide-react";

const infoCards = [
  { icon: Clock, label: "수업 시간", value: "60분 / 90분 / 120분" },
  { icon: Users, label: "대상 연령", value: "유치원생 ~ 중학생" },
  { icon: MapPin, label: "위치", value: ACADEMY.addressShort },
  { icon: Phone, label: "문의", value: ACADEMY.phone, href: `tel:${ACADEMY.phone}` },
];

export function LocationSection() {
  return (
    <section id="location" className="snap-section-top">
      <div className="container-main">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <m.p variants={fadeUp} className="section-label mb-3">
            Location & Info
          </m.p>
          <m.h2
            variants={fadeUp}
            className="section-title text-[var(--text-h1)] mb-3"
          >
            오시는 길
          </m.h2>
        </m.div>

        {/* Info cards row */}
        <m.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {infoCards.map((card) => (
            <m.div
              key={card.label}
              variants={fadeUp}
              className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-sm p-5"
            >
              <card.icon size={22} className="text-[var(--color-accent)] mb-3" />
              <h3 className="text-[var(--text-small)] font-bold mb-1">{card.label}</h3>
              {card.href ? (
                <a href={card.href} className="text-[var(--text-small)] text-[var(--color-accent)] font-medium hover:underline">
                  {card.value}
                </a>
              ) : (
                <p className="text-[var(--text-small)] text-[var(--color-muted)]">{card.value}</p>
              )}
            </m.div>
          ))}
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Storefront photo */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md"
          >
            <Image
              src="/images/about/edu-01.jpg"
              alt="생각하는 손 미술학원 외관"
              fill
              className="object-cover photo-style"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </m.div>

          {/* Details + hours */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-5"
          >
            <m.div variants={fadeUp}>
              <h3 className="flex items-center gap-2 text-[var(--text-body)] font-bold mb-1.5">
                <MapPin size={18} className="text-[var(--color-accent)]" />
                주소
              </h3>
              <p className="text-[var(--text-small)] text-[var(--color-muted)]">
                {ACADEMY.address}
              </p>
            </m.div>

            <m.div variants={fadeUp}>
              <h3 className="flex items-center gap-2 text-[var(--text-body)] font-bold mb-1.5">
                <Car size={18} className="text-[var(--color-accent)]" />
                주차 안내
              </h3>
              <p className="text-[var(--text-small)] text-[var(--color-muted)]">
                에스파이브시티 A동, B동 지하주차장 이용 가능
                <br />
                B동 엘리베이터 → 7층
              </p>
            </m.div>

            <m.div variants={fadeUp}>
              <h3 className="flex items-center gap-2 text-[var(--text-body)] font-bold mb-1.5">
                <Train size={18} className="text-[var(--color-accent)]" />
                인근 학교
              </h3>
              <p className="text-[var(--text-small)] text-[var(--color-muted)]">
                첨단초, 송명초, 해송초 등 송도 5공구 인근
              </p>
            </m.div>

            <m.div variants={fadeUp}>
              <h3 className="flex items-center gap-2 text-[var(--text-body)] font-bold mb-1.5">
                <Clock size={18} className="text-[var(--color-accent)]" />
                운영 시간
              </h3>
              <div className="text-[var(--text-small)] text-[var(--color-muted)] space-y-1">
                <p>월~금 {ACADEMY.hours.weekday}</p>
                <p>토요일 {ACADEMY.hours.saturday}</p>
                <p>일요일 {ACADEMY.hours.sunday}</p>
              </div>
            </m.div>

            <m.div variants={fadeUp} className="pt-2">
              <a
                href={ACADEMY.naverMap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-sm text-[var(--text-small)] font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                <MapPin size={16} />
                네이버 지도에서 보기
              </a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
