import { ImageResponse } from "next/og";

export const alt = "Taxi Service in Ujjain – 24/7 Car Taxi. Call +91 70246 01594.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#7c2d12",
          color: "white",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28 }}>Car Taxi Service Ujjain · 24/7</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Taxi Service in Ujjain
          </div>
          <div style={{ fontSize: 32, marginTop: 24 }}>Call or WhatsApp +91 70246 01594</div>
        </div>
        <div style={{ display: "flex", fontSize: 24 }}>
          Mahakal Marg, Chourha, Ujjain, Madhya Pradesh 456006
        </div>
      </div>
    ),
    { ...size },
  );
}
