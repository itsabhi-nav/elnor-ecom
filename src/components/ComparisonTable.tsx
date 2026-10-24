"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, X, Minus } from "lucide-react";
import { PRODUCTS } from "@/data/products";

const FEATURES = [
  "Adjustable heat levels",
  "Cordless / rechargeable",
  "Whisper-quiet (<38 dB)",
  "Multiple massage modes",
  "1-Year warranty",
  "Suitable for travel",
  "Bluetooth audio",
  "App-free operation",
];

// Feature matrix: product index → which features it has
const MATRIX: Record<number, (boolean | "partial")[]> = {
  0: [true, true, true, true, true, true, false, true],   // Neck
  1: [false, true, true, true, true, true, false, true],  // Cap
  2: [true, true, true, true, true, true, false, true],   // Cupping
  3: [true, true, true, true, true, true, true, true],    // Eye
  4: [true, false, true, true, true, false, false, true], // Belt
};

const SHOW_INDICES = [0, 1, 3, 4]; // Which products to compare

function FeatureCell({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "var(--sage-soft)",
          margin: "0 auto",
        }}
      >
        <Check size={14} color="var(--sage)" strokeWidth={2.5} />
      </div>
    );
  if (value === "partial")
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "var(--bronze-soft)",
          margin: "0 auto",
        }}
      >
        <Minus size={14} color="var(--bronze)" strokeWidth={2.5} />
      </div>
    );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        background: "var(--surface-raised)",
        margin: "0 auto",
      }}
    >
      <X size={14} color="var(--ink-40)" strokeWidth={2} />
    </div>
  );
}

export default function ComparisonTable() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRevealed(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section"
      style={{ background: "var(--canvas)" }}
    >
      <div className="container">
        <div
          className={`reveal ${revealed ? "is-visible" : ""}`}
          style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 28px" }}
        >
          <div className="t-label" style={{ justifyContent: "center", marginBottom: "12px" }}>
            Side by Side
          </div>
          <h2 className="t-display-md" style={{ lineHeight: 1.15 }}>
            Find your{" "}
            <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>perfect device.</em>
          </h2>
          <p className="t-body" style={{ marginTop: "10px", fontSize: "0.95rem" }}>
            Compare features across our four most popular devices to find the right fit for your daily ritual.
          </p>
        </div>

        {/* Table */}
        <div
          className={`reveal ${revealed ? "is-visible" : ""} reveal-delay-1`}
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "var(--r-xl)",
            border: "1px solid var(--ink-08)",
            boxShadow: "var(--e-2)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "var(--surface)",
              minWidth: "620px",
            }}
          >
            {/* Product Header Row */}
            <thead>
              <tr style={{ borderBottom: "1px solid var(--ink-08)" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "20px 24px",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-40)",
                    fontWeight: 500,
                    background: "var(--surface-raised)",
                    width: "200px",
                    borderRight: "1px solid var(--ink-08)",
                  }}
                >
                  Feature
                </th>
                {SHOW_INDICES.map((prodIdx, i) => {
                  const prod = PRODUCTS[prodIdx];
                  return (
                    <th
                      key={prodIdx}
                      style={{
                        padding: "16px 12px",
                        textAlign: "center",
                        background: i === 0 ? "var(--bronze-soft)" : "var(--surface-raised)",
                        borderRight: i < SHOW_INDICES.length - 1 ? "1px solid var(--ink-08)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: i === 0 ? "var(--bronze)" : "var(--ink)",
                          lineHeight: 1.25,
                          marginBottom: "4px",
                        }}
                      >
                        {prod.shortName.replace("ELNOR ", "")}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 800,
                          color: "var(--ink)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        ₹{prod.price.toLocaleString("en-IN")}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {FEATURES.map((feature, fIdx) => (
                <tr
                  key={feature}
                  style={{
                    borderBottom: fIdx < FEATURES.length - 1 ? "1px solid var(--ink-08)" : "none",
                    background: fIdx % 2 === 0 ? "var(--surface)" : "var(--surface-raised)",
                  }}
                >
                  <td
                    style={{
                      padding: "14px 24px",
                      fontSize: "0.875rem",
                      color: "var(--ink-80)",
                      fontWeight: 500,
                      borderRight: "1px solid var(--ink-08)",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {feature}
                  </td>
                  {SHOW_INDICES.map((prodIdx, i) => (
                    <td
                      key={prodIdx}
                      style={{
                        padding: "14px 12px",
                        textAlign: "center",
                        borderRight: i < SHOW_INDICES.length - 1 ? "1px solid var(--ink-08)" : "none",
                        background: i === 0 ? "rgba(244, 235, 217, 0.35)" : "transparent",
                      }}
                    >
                      <FeatureCell value={MATRIX[prodIdx]?.[fIdx] ?? false} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
