import Image from "next/image";
import { ACADEMY } from "@/lib/constants";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="snap-section-auto bg-[var(--color-primary)] text-[var(--color-warm-white)]"
    >
      <div className="container-main py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo/logo.png"
                alt="생각하는 손 로고"
                width={32}
                height={32}
                className="rounded-full"
              />
              <h3 className="text-lg font-bold">
                생각하는 손 미술학원
              </h3>
            </div>
            <p className="text-sm text-[var(--color-kraft)] leading-relaxed">
              사고력 기반 아동미술 교육
              <br />
              자유 속의 체계, 체계 안의 자유
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-kraft)] font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${ACADEMY.phone}`}
                  className="hover:text-[var(--color-accent-light)] transition-colors"
                >
                  {ACADEMY.phone}
                </a>
              </li>
              <li className="text-[var(--color-kraft)]">
                {ACADEMY.addressShort}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-kraft)] font-semibold mb-4">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-[var(--color-kraft)]">
              <li>월~금 {ACADEMY.hours.weekday}</li>
              <li>토요일 {ACADEMY.hours.saturday}</li>
              <li>일요일 {ACADEMY.hours.sunday}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-kraft)] font-semibold mb-4">
              Follow
            </h4>
            <div className="flex gap-4">
              <a
                href={ACADEMY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[var(--color-accent-light)] transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={ACADEMY.blog}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Naver Blog"
                className="hover:text-[var(--color-accent-light)] transition-colors text-sm font-medium"
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-primary-light)]">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} {ACADEMY.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
