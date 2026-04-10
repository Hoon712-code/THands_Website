"use client";

import { useEffect } from "react";

/**
 * 부드러운 스냅 스크롤:
 * - 자유 스크롤 허용
 * - 스크롤이 멈추면 가장 많이 보이는 섹션으로 부드럽게 이동
 * - 섹션이 70% 이상 보이면 해당 섹션으로 스냅
 */
export function useSmoothSnap() {
  useEffect(() => {
    // reduced motion 존중
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    let isSnapping = false;
    let lastScrollY = 0;

    const getSections = () =>
      document.querySelectorAll<HTMLElement>(
        ".snap-section, .snap-section-top, .snap-section-auto"
      );

    const findBestSection = (): HTMLElement | null => {
      const sections = getSections();
      const viewportHeight = window.innerHeight;
      let bestSection: HTMLElement | null = null;
      let bestVisibility = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / viewportHeight;

        if (visibility > bestVisibility) {
          bestVisibility = visibility;
          bestSection = section;
        }
      });

      // 70% 이상 보여야 스냅
      if (bestVisibility < 0.3) return null;
      return bestSection;
    };

    const snapToSection = () => {
      if (isSnapping) return;

      const section = findBestSection();
      if (!section) return;

      const rect = section.getBoundingClientRect();
      // 이미 거의 정렬되어 있으면 스냅하지 않음 (5px 이내)
      if (Math.abs(rect.top) < 5) return;

      isSnapping = true;

      // scroll-behavior: smooth가 CSS에 설정되어 있으므로 그대로 활용
      window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: "smooth",
      });

      // 스냅 완료 후 플래그 리셋 (스크롤 애니메이션 시간)
      setTimeout(() => {
        isSnapping = false;
      }, 800);
    };

    const onScroll = () => {
      if (isSnapping) return;

      lastScrollY = window.scrollY;

      // 스크롤이 멈추면 스냅 (150ms 디바운스)
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        // 스크롤이 실제로 멈췄는지 확인
        if (Math.abs(window.scrollY - lastScrollY) < 2) {
          snapToSection();
        }
      }, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);
}
