"use client";

import { Phone } from "lucide-react";
import { ACADEMY } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const { isScrolled } = useScrollProgress();

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-[var(--duration-normal)]",
        isScrolled ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="bg-[var(--color-accent)] text-white flex items-center">
        <a
          href="#cta"
          className="flex-1 text-center py-4 font-medium text-[0.9375rem] active:bg-[var(--color-accent-hover)] transition-colors"
        >
          체험수업 신청하기
        </a>
        <div className="w-px h-8 bg-white/20" />
        <a
          href={`tel:${ACADEMY.phone}`}
          className="px-5 py-4 active:bg-[var(--color-accent-hover)] transition-colors"
          aria-label="전화하기"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}
