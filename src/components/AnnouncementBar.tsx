"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const MESSAGES = [
  "Free shipping on all orders above ₹999 · Delivered across India in 3–5 days",
  "1-Year Direct Replacement Warranty on every ELNOR device · No questions asked",
  "4.8★ Average · 50,000+ happy customers across India on Amazon",
];

export default function AnnouncementBar() {
  const [msgIdx, setMsgIdx] = React.useState(0);
  const [visible, setVisible] = useState(true);

  React.useEffect(() => {
    const t = setInterval(() => setMsgIdx((i) => (i + 1) % MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        background: "var(--ink)",
        color: "#FFFFFF",
        fontSize: "0.78rem",
        fontWeight: 500,
        letterSpacing: "0.01em",
        padding: "10px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          marginInline: "auto",
          paddingInline: "var(--gutter)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <span
          key={msgIdx}
          style={{
            opacity: 1,
            animation: "fadeSlide 0.45s ease",
            textAlign: "center",
          }}
        >
          {MESSAGES[msgIdx]}
        </span>

        <button
          onClick={() => setVisible(false)}
          aria-label="Close announcement"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            lineHeight: 1,
          }}
        >
          <X size={14} />
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
