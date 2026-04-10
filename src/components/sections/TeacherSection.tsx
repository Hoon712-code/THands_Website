"use client";

import { m } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const teachers = [
  {
    role: "원장",
    quote: "아이의 그림에는 아이의 생각이 담겨 있습니다.",
    credentials: ["미술교육학 전공", "예술영재교육원 지도 경험", "매 수업 직접 참여"],
  },
  {
    role: "부원장",
    quote: "기초가 탄탄해야 자유로운 표현이 가능합니다.",
    credentials: ["미술교육 전공", "드로잉·색채 전문", "매 수업 직접 참여"],
  },
];

export function TeacherSection() {
  return (
    <section
        id="teacher"
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
              Teachers
            </m.p>
            <m.h2
              variants={fadeUp}
              className="section-title text-[var(--text-h1)] mb-16"
            >
              두 명의 원장이 매 수업을 함께합니다.
            </m.h2>
          </m.div>

          <m.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {teachers.map((teacher) => (
              <m.div key={teacher.role} variants={fadeUp} className="flex gap-6">
                {/* Avatar placeholder */}
                <div className="w-24 h-32 lg:w-32 lg:h-40 flex-shrink-0 bg-[var(--color-warm-white)] border border-[var(--color-border)] flex items-center justify-center">
                  <span className="text-[var(--text-small)] text-[var(--color-muted)]">
                    사진
                  </span>
                </div>

                <div>
                  <h3 className="text-[var(--text-h3)] font-semibold mb-2">
                    {teacher.role}
                  </h3>
                  <p
                    className="text-[var(--text-body)] text-[var(--color-primary-light)] mb-4 italic"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
                  >
                    &ldquo;{teacher.quote}&rdquo;
                  </p>
                  <ul className="space-y-1.5">
                    {teacher.credentials.map((cred) => (
                      <li
                        key={cred}
                        className="text-[var(--text-small)] text-[var(--color-muted)] flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
  );
}
