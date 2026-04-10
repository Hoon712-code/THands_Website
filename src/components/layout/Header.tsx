"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, ACADEMY } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Menu, X } from "lucide-react";

export function Header() {
  const { isScrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--duration-normal)]",
        isScrolled
          ? "bg-[var(--color-warm-white)]/95 backdrop-blur-[12px] border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-main flex items-center justify-between h-16 lg:h-20">
        <a
          href="#hero"
          className="flex items-center gap-2.5"
        >
          <Image
            src="/images/logo/logo.png"
            alt="생각하는 손 로고"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className={cn(
            "text-base lg:text-lg font-bold tracking-[var(--tracking-tight)] transition-colors",
            isScrolled ? "text-[var(--color-primary)]" : "text-white"
          )}>
            생각하는 손 미술학원
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-[var(--text-small)] font-medium relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--color-accent)] after:transition-all after:duration-[var(--duration-fast)] hover:after:w-full transition-colors",
                isScrolled
                  ? "text-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                  : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
          <Button href="#cta" size="default">
            체험수업 신청
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "lg:hidden p-2 -mr-2 transition-colors",
            isScrolled ? "text-[var(--color-primary)]" : "text-white"
          )}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-nav" className="lg:hidden bg-[var(--color-warm-white)] border-b border-[var(--color-border)]">
          <nav className="container-main py-4 flex flex-col gap-4" aria-label="모바일 메뉴">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium py-2 border-b border-[var(--color-border)] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button href="#cta" size="default" className="mt-2">
              체험수업 신청
            </Button>
            <a
              href={`tel:${ACADEMY.phone}`}
              className="text-[var(--color-muted)] text-sm"
            >
              {ACADEMY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
