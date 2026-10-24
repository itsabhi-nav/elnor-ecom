import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ELNOR — Smart Massage & Thermal Wellness Rituals";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const heroImage = await readFile(
  join(process.cwd(), "public/images/editorial/editorial-hero-neck.jpg"),
).then((image) => `data:image/jpeg;base64,${image.toString("base64")}`);

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F7F5F0",
          color: "#1A1917",
          padding: "72px 82px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 580,
            height: 580,
            right: -130,
            top: -90,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,178,120,.72), rgba(212,178,120,0) 68%)",
          }}
        />
        <img
          src={heroImage}
          width="450"
          height="630"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 450,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 490,
            height: 630,
            background: "linear-gradient(90deg, #F7F5F0 0%, rgba(247,245,240,0) 58%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            right: 104,
            bottom: -110,
            borderRadius: "50%",
            background: "#2D4A35",
            opacity: .95,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", position: "relative", width: "700px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 24, letterSpacing: 5, fontWeight: 700 }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#A0723E" }} />
            ELNOR
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 58, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2.5, marginTop: 62 }}>
            <span>Quiet restoration,</span>
            <span>engineered for every day.</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 27, lineHeight: 1.4, color: "#625E57", maxWidth: 710 }}>
            Smart kinetic massage and calibrated thermal care for the way you live.
          </div>
          <div style={{ display: "flex", marginTop: "auto", fontSize: 21, color: "#A0723E", letterSpacing: 2 }}>
            THERMAL CARE · KINETIC THERAPY · DAILY RITUALS
          </div>
        </div>
      </div>
    ),
    size,
  );
}
