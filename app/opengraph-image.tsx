import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.person.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.7 }}>
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            {siteConfig.person.name}
          </div>
          <div style={{ fontSize: 44, opacity: 0.85, fontWeight: 400 }}>
            {siteConfig.person.jobTitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            opacity: 0.6,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
      </div>
    ),
    size,
  );
}
