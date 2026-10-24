import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "18px",
          color: "#F7F5F0",
          fontSize: 40,
          fontWeight: 700,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        E
        <span
          style={{
            position: "absolute",
            width: 10,
            height: 10,
            right: 10,
            top: 10,
            borderRadius: "50%",
            background: "#D4B278",
          }}
        />
      </div>
    ),
    size,
  );
}
