"use client";

import React, { useRef, useEffect, useState } from "react";
import { Star, Quote, CheckCircle2, ArrowUpRight, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";

const REVIEWS = [
  {
    name: "Dr. Ananya Sen",
    role: "Sports Physiotherapist",
    city: "Bengaluru",
    verificationBadge: "Verified Clinician",
    product: "Cervical 3D Neck Massager",
    productSpec: "42°C Graphene · Bi-directional Shiatsu",
    productId: "elnor-neck-pillow",
    rating: 5,
    headline: "Replicates a therapist's touch.",
    quote:
      "I recommend the ELNOR neck massager to patients suffering from desk-induced upper cross syndrome. The bi-directional nodes genuinely replicate trained thumbs, and the 42°C constant graphene heat increases muscle elasticity within minutes. Remarkable precision for the price.",
  },
  {
    name: "Vikram Malhotra",
    role: "Senior Engineering Lead",
    city: "Hyderabad",
    verificationBadge: "Amazon India Verified",
    product: "Cordless Smart Cap Massager",
    productSpec: "Occipital Decompression · <38 dB",
    productId: "elnor-cap-massager",
    rating: 5,
    headline: "Transformed my wind-down routine.",
    quote:
      "10+ hours on three monitors gave me chronic occipital headaches every evening. Fifteen minutes in a dark room with the ELNOR Cap has completely changed my recovery. Whisper quiet, fully cordless, and the build quality feels like Japanese high-end hardware.",
  },
  {
    name: "Rituja Sharma",
    role: "Mindfulness & Yoga Educator",
    city: "Mumbai",
    verificationBadge: "Verified Purchase",
    product: "Aura Smart Thermal Eye Massager",
    productSpec: "Air Compression · Ambient Audio",
    productId: "elnor-eye-massager",
    rating: 5,
    headline: "My sleep tracker confirmed it.",
    quote:
      "The combination of orbital air compression, gentle eyelid warming, and ambient soundscapes relaxes my sympathetic nervous system faster than anything I've tried. My Oura sleep tracker recorded a 40% increase in deep sleep within the first week.",
  },
];

const STATS = [
  { value: "50,000+", label: "Sessions Completed", sub: "Across India & Asia" },
  { value: "4.8 ★",  label: "Amazon India Rating", sub: "From 1,400+ verified buyers" },
  { value: "1-Year", label: "Direct Replacement",  sub: "Doorstep pickup & drop" },
  { value: "<38 dB", label: "Whisper Kinematics",  sub: "Brushless quiet motors" },
];

export default function Testimonials() {
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
      style={{
        paddingTop: "clamp(56px, 7vw, 92px)",
        paddingBottom: "clamp(56px, 7vw, 92px)",
        background: "var(--surface-raised)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* ── STATS ROW (Architectural Metrics Banner) ── */}
        <div
          className={`reveal ${revealed ? "is-visible" : ""} elnor-stats-grid`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--ink-08)",
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
            marginBottom: "clamp(36px, 5vw, 56px)",
            border: "1px solid var(--ink-08)",
            boxShadow: "var(--e-1)",
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "var(--surface)",
                padding: "24px 20px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 2.6vw, 2.3rem)",
                  fontWeight: 600,
                  color: "var(--bronze)",
                  lineHeight: 1,
                  marginBottom: "6px",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "2px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--ink-50)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION HEADER ── */}
        <div
          className={`reveal ${revealed ? "is-visible" : ""} reveal-delay-1`}
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto clamp(32px, 4vw, 48px)",
          }}
        >
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "14px" }}>
            <span className="eyebrow-dot" />
            <span>Verified Feedback · 04</span>
          </div>

          <h2
            className="headline-section"
            style={{
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            Trusted by{" "}
            <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>
              those who know.
            </em>
          </h2>

          <p
            className="subheadline"
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "var(--ink-60)",
            }}
          >
            Real accounts from sports physiotherapists, software engineers, 
            and mindfulness educators using ELNOR in their daily rituals.
          </p>
        </div>

        {/* ── REVIEWS GRID ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="elnor-reviews-grid"
        >
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className={`reveal ${revealed ? "is-visible" : ""} reveal-delay-${i + 2} elnor-review-card`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--ink-10)",
                borderRadius: "var(--r-xl)",
                padding: "clamp(26px, 3.2vw, 34px)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: "0 4px 20px rgba(26, 25, 23, 0.04)",
                transition: "all var(--t-mid)",
              }}
            >
              {/* Subtle quote watermark */}
              <Quote
                size={54}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "22px",
                  color: "var(--ink-08)",
                  transform: "rotate(180deg)",
                  pointerEvents: "none",
                }}
              />

              {/* Stars & Verification Pill */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", gap: "3px" }}>
                  {[...Array(rev.rating)].map((_, j) => (
                    <Star key={j} size={15} fill="#D4832A" color="#D4832A" />
                  ))}
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "var(--sage-soft)",
                    color: "var(--sage-mid)",
                    borderRadius: "var(--r-pill)",
                    padding: "3px 8px",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}
                >
                  <CheckCircle2 size={11} strokeWidth={2.5} />
                  <span>{rev.verificationBadge}</span>
                </div>
              </div>

              {/* Headline */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.15rem, 1.4vw, 1.3rem)",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                &ldquo;{rev.headline}&rdquo;
              </h3>

              {/* Review Body */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--ink-70)",
                  lineHeight: 1.68,
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                {rev.quote}
              </p>

              {/* Linked Product Pill */}
              <Link
                href={`/products/${rev.productId}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
                  background: "var(--surface-raised)",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--ink-08)",
                  textDecoration: "none",
                  marginBottom: "20px",
                  transition: "all var(--t-fast)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--bronze)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink-08)";
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--ink)" }}>
                    {rev.product}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--bronze)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {rev.productSpec}
                  </div>
                </div>
                <ArrowUpRight size={14} color="var(--bronze)" style={{ flexShrink: 0 }} />
              </Link>

              {/* Reviewer Metadata */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--ink-08)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--bronze-soft)",
                    border: "1px solid var(--bronze-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--bronze)",
                    flexShrink: 0,
                  }}
                >
                  {rev.name.charAt(0)}
                </div>

                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      lineHeight: 1.2,
                    }}
                  >
                    {rev.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      color: "var(--ink-50)",
                      marginTop: "2px",
                    }}
                  >
                    {rev.role} · {rev.city}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .elnor-review-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(26, 25, 23, 0.08);
          border-color: var(--ink-20);
        }

        @media (max-width: 960px) {
          .elnor-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .elnor-reviews-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        @media (max-width: 560px) {
          .elnor-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
