import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 55%, #0ea5e9 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "rgba(255,255,255,0.15)",
            color: "#ffffff",
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 40,
          }}
        >
          BC
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#ffffff" }}>
          Building Care Enterprises
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#e0f2fe", marginTop: 20 }}>
          Hardware · Sanitary · Electrical · Motor Parts · Furniture · Electronics
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#bae6fd", marginTop: 12 }}>
          Hetauda, Makawanpur, Nepal
        </div>
      </div>
    ),
    { ...size },
  );
}
