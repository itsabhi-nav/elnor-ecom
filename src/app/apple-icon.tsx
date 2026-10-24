import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1917",
          borderRadius: "42px",
          color: "#F7F5F0",
          fontSize: 118,
          fontWeight: 700,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        E
        <span
          style={{
            position: "absolute",
            width: 28,
            height: 28,
            right: 28,
            top: 28,
            borderRadius: "50%",
            background: "#D4B278",
          }}
        />
      </div>
    ),
    size,
  );
}
