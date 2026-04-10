"use client";

import { m } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ACADEMY } from "@/lib/constants";
import { Clock, MapPin, Calendar, Users } from "lucide-react";

const infoItems = [
  {
    icon: Clock,
    label: "수업 시간",
    value: "60분 / 90분 / 120분 선택",
  },
  {
    icon: Calendar,
    label: "수업 횟수",
    value: "주 1회 / 2회 / 3회 선택",
  },
  {
    icon: Users,
    label: "대상 연령",
    value: "유치원생 ~ 중학생",
  },
  {
    icon: MapPin,
    label: "위치",
    value: ACADEMY.addressShort,
  },
];

export function InfoSection() {
  return (
    <section
        id="info"
        className="py-[var(--space-section)] bg-[var(--color-cream)]"
      >
        <div className="container-main">
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <m.p variants={fadeUp} className="section-label mb-4">
              Information
            </m.p>
            <m.h2
              variants={fadeUp}
              className="section-title text-[var(--text-h1)] mb-16"
            >
              수업 안내
            </m.h2>
          </m.div>

          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {infoItems.map((item) => (
              <m.div
                key={item.label}
                variants={fadeUp}
                className="bg-[var(--color-warm-white)] border border-[var(--color-border)] p-6"
              >
                <item.icon
                  size={24}
                  className="text-[var(--color-accent)] mb-4"
                />
                <h3 className="text-[var(--text-small)] font-semibold mb-2">
                  {item.label}
                </h3>
                <p className="text-[var(--text-small)] text-[var(--color-muted)]">
                  {item.value}
                </p>
              </m.div>
            ))}
          </m.div>

          {/* Operating hours */}
          <m.div
            className="mt-10 bg-[var(--color-warm-white)] border border-[var(--color-border)] p-8 max-w-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-[var(--text-h3)] font-semibold mb-4">
              운영 시간
            </h3>
            <div className="space-y-2 text-[var(--text-small)]">
              <div className="flex justify-between">
                <span className="text-[var(--color-muted)]">월 ~ 금</span>
                <span>{ACADEMY.hours.weekday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted)]">토요일</span>
                <span>{ACADEMY.hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted)]">일요일</span>
                <span>{ACADEMY.hours.sunday}</span>
              </div>
            </div>
          </m.div>
        </div>
      </section>
  );
}
