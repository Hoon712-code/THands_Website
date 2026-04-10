import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "생각하는 손 미술학원 — 송도 사고력 기반 아동미술";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F3EE",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            left: "80px",
            top: "80px",
            bottom: "80px",
            width: "3px",
            background: "#C85A3A",
          }}
        />

        <div style={{ paddingLeft: "40px", display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C85A3A",
              marginBottom: "24px",
            }}
          >
            Thinking Hands Art Studio
          </p>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: 300,
              color: "#2C2C2C",
              lineHeight: 1.3,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            생각하는 손
            <br />
            미술학원
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#8E8578",
              lineHeight: 1.6,
            }}
          >
            사고력 기반 아동미술 교육 · 송도 에스파이브시티
          </p>
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            display: "flex",
            gap: "32px",
            fontSize: "14px",
            color: "#8E8578",
          }}
        >
          <span>유치부 ~ 중학생</span>
          <span>드로잉 70% + 융합미술 30%</span>
          <span>체험수업 접수 중</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
