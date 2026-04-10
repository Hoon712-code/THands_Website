import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <div className="text-center">
        <h1
          className="text-6xl font-bold text-[var(--color-border)] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          404
        </h1>
        <p className="text-[var(--color-muted)] mb-8">
          페이지를 찾을 수 없습니다.
        </p>
        <Button href="/">홈으로 돌아가기</Button>
      </div>
    </main>
  );
}
