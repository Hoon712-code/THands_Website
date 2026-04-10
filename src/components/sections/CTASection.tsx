"use client";

import { useState, type FormEvent } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ACADEMY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Phone } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface FormData {
  parentName: string;
  phone: string;
  childName: string;
  childAge: string;
  preferredDay: string;
  experience: string;
}

export function CTASection() {
  const [form, setForm] = useState<FormData>({
    parentName: "",
    phone: "",
    childName: "",
    childAge: "",
    preferredDay: "",
    experience: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { error: dbError } = await supabase
      .from("trial_requests")
      .insert({
        parent_name: form.parentName,
        phone: form.phone,
        child_name: form.childName,
        child_age: form.childAge,
        preferred_day: form.preferredDay,
        experience: form.experience,
      });

    if (dbError) {
      setError("신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const inputClass =
    "w-full px-4 py-3.5 bg-white border border-[var(--color-border)] rounded-sm text-[var(--text-body)] placeholder:text-[var(--color-kraft)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all";

  return (
    <section id="cta" className="snap-section relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/classroom/06.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--color-accent-light)]/92" />
      </div>

      <div className="relative z-10 container-main max-w-2xl py-16 lg:py-0">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10"
        >
          <m.p variants={fadeUp} className="section-label mb-3">
            Trial Class
          </m.p>
          <m.h2
            variants={fadeUp}
            className="section-title text-[var(--text-h1)] mb-3"
          >
            아이의 그림에서 생각이 보이는 경험,
            <br className="hidden sm:block" />
            한 번의 수업으로 확인해보세요.
          </m.h2>
          <m.p variants={fadeUp} className="text-[var(--color-muted)]">
            체험수업은 무료이며, 부담 없이 신청하실 수 있습니다.
          </m.p>
        </m.div>

        {submitted ? (
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white border border-[var(--color-border)] rounded-sm shadow-lg"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-[var(--text-h2)] font-bold mb-2">
              감사합니다.
            </p>
            <p className="text-[var(--color-muted)]">
              빠른 시일 내에 연락드리겠습니다.
            </p>
          </m.div>
        ) : (
          <m.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4 bg-white p-7 lg:p-10 border border-[var(--color-border)] rounded-sm shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="parentName"
                placeholder="학부모 성함"
                required
                aria-label="학부모 성함"
                autoComplete="name"
                value={form.parentName}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                placeholder="연락처"
                required
                aria-label="연락처"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="childName"
                placeholder="아이 이름"
                required
                aria-label="아이 이름"
                value={form.childName}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="text"
                name="childAge"
                placeholder="아이 나이/학년"
                required
                aria-label="아이 나이/학년"
                value={form.childAge}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="preferredDay"
                required
                value={form.preferredDay}
                onChange={handleChange}
                className={inputClass}
                aria-label="희망 요일"
              >
                <option value="" disabled hidden>희망 요일</option>
                <option value="mon">월요일</option>
                <option value="tue">화요일</option>
                <option value="wed">수요일</option>
                <option value="thu">목요일</option>
                <option value="fri">금요일</option>
                <option value="sat">토요일</option>
              </select>
              <select
                name="experience"
                required
                value={form.experience}
                onChange={handleChange}
                className={inputClass}
                aria-label="미술 경험"
              >
                <option value="" disabled hidden>미술 경험</option>
                <option value="none">없음</option>
                <option value="some">조금 있음</option>
                <option value="experienced">다른 학원 경험 있음</option>
              </select>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                {submitting ? "신청 중..." : "체험수업 신청하기"}
              </Button>
              <span className="text-[var(--text-small)] text-[var(--color-muted)]">
                또는{" "}
                <a
                  href={`tel:${ACADEMY.phone}`}
                  className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <Phone size={14} />
                  {ACADEMY.phone}
                </a>
              </span>
            </div>

            {error && (
              <p className="text-red-500 text-[var(--text-small)] text-center mt-2">{error}</p>
            )}
            <p className="text-[var(--text-xs)] text-[var(--color-kraft)] text-center mt-3">
              개인정보는 체험수업 안내 목적으로만 사용되며, 이후 즉시 폐기됩니다.
            </p>
          </m.form>
        )}
      </div>
    </section>
  );
}
