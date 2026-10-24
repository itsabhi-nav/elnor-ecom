"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StageMovement {
  index: string;
  label: string;
  duration: string;
  minutes: number;
  title: string;
  body: string;
  photo: string;
  alt: string;
  device: {
    name: string;
    feature: string;
    href: string;
  };
}

const MOVEMENTS: StageMovement[] = [
  {
    index: "01",
    label: "WARM",
    duration: "≈ 5 min",
    minutes: 5,
    title: "Warmth first",
    body: "Gentle heat relaxes the muscles and prepares the body, the way a hot bath opens a spa visit. Start at the lowest of the three heat levels and let it settle.",
    photo: "/images/editorial/editorial-steam-over-stones.jpg",
    alt: "Steam rising from heated stones in a natural wooden vessel",
    device: {
      name: "ELNOR Heat Belt",
      feature: "Heat — 3 quick-heat levels",
      href: "/products/elnor-heating-belt",
    },
  },
  {
    index: "02",
    label: "RELEASE",
    duration: "≈ 7 min",
    minutes: 7,
    title: "Then the tension",
    body: "Kneading, pressure or suction works into stiff areas at the intensity you choose. Four deep nodes and warmth, and the timer ends the session for you.",
    photo: "/images/editorial/editorial-shiatsu-shoulder.jpg",
    alt: "Therapeutic hands applying deep Shiatsu pressure into shoulder tissue",
    device: {
      name: "ELNOR Neck",
      feature: "Heat — 45°C infrared heat",
      href: "/products/elnor-neck-pillow",
    },
  },
  {
    index: "03",
    label: "RESTORE",
    duration: "≈ 3 min",
    minutes: 3,
    title: "Then rest",
    body: "Slow, light pulses as the session winds down. Warmth over the eyes, a little music, and the calm settling. Breathe, sit still.",
    photo: "/images/editorial/editorial-ceramic-and-smoke.jpg",
    alt: "A ceramic bowl with rising steam and amber light in a quiet room",
    device: {
      name: "ELNOR Eye",
      feature: "Heat — Gentle warmth",
      href: "/products/elnor-eye-massager",
    },
  },
];

export default function RitualVisualizer() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRevealed(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ritual"
      className="section"
      style={{
        background: "var(--canvas)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--ink-08)",
      }}
    >
      {/* Ambient background atmosphere */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 15% 10%, rgba(212, 178, 120, 0.08) 0%, transparent 60%), " +
            "radial-gradient(ellipse 55% 55% at 85% 90%, rgba(63, 88, 68, 0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>

        {/* ── HEADER: Editorial Score Header ── */}
        <header className="elnor-ritual-header">
          <div className="elnor-ritual-header-title">
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              <span className="eyebrow-dot" />
              <span>The 15-Minute Ritual</span>
            </div>
            <h2
              className="t-display-md"
              style={{
                fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Fifteen minutes,<br />
              <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>
                three stages.
              </em>
            </h2>
          </div>

          <div className="elnor-ritual-header-aside">
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.65,
                color: "var(--ink-60)",
                margin: 0,
                maxWidth: "460px",
              }}
            >
              A spa session follows an order: warm the body, release the tension,
              then rest. Every ELNOR device is built around the same rhythm.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "10px",
                marginTop: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                15
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--bronze)",
                }}
              >
                minutes, end to end
              </span>
            </div>
          </div>
        </header>

        {/* ── TIMELINE BAR (Proportional Score) ── */}
        <div
          className="elnor-ritual-timeline"
          aria-hidden="true"
          style={{
            display: "flex",
            gap: "12px",
            paddingBottom: "12px",
            borderBottom: "1px solid var(--ink-08)",
            marginBottom: "40px",
          }}
        >
          {MOVEMENTS.map((m) => (
            <div
              key={m.index}
              style={{
                flex: m.minutes,
                height: "2px",
                background: "var(--ink-10)",
                position: "relative",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, var(--bronze), rgba(212, 178, 120, 0.4))",
                }}
              />
            </div>
          ))}
        </div>

        {/* ── 3 MOVEMENTS SCORE GRID (Left to Right) ── */}
        <ol
          className="elnor-ritual-movements-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "36px",
            listStyle: "none",
            padding: 0,
            margin: "0 0 52px 0",
          }}
        >
          {MOVEMENTS.map((m, idx) => (
            <li
              key={m.index}
              className={`elnor-movement-card reveal ${revealed ? "is-visible" : ""} reveal-delay-${idx + 1}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                minWidth: 0,
              }}
            >
              {/* Stage Top Bar: 01 WARM ... ≈ 5 min */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                  borderBottom: "1px solid var(--ink-08)",
                  fontSize: "0.74rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontWeight: 700, color: "var(--bronze)", letterSpacing: "0.08em" }}>
                    {m.index}
                  </span>
                  <span style={{ fontWeight: 700, color: "var(--ink)", letterSpacing: "0.14em" }}>
                    {m.label}
                  </span>
                </div>
                <span style={{ color: "var(--ink-40)", letterSpacing: "0.04em" }}>
                  {m.duration}
                </span>
              </div>

              {/* Movement Lifestyle Photograph (4:5 Ratio) */}
              <div
                className="elnor-movement-photo-frame"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  borderRadius: "var(--r-lg)",
                  overflow: "hidden",
                  background: "var(--surface-raised)",
                  boxShadow: "0 8px 30px rgba(26,25,23,0.06)",
                }}
              >
                <Image
                  src={m.photo}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="elnor-movement-img"
                  priority={idx === 0}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(26,25,23,0.2) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Title & Body */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.55rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                    margin: "4px 0 10px 0",
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    color: "var(--ink-60)",
                    margin: 0,
                  }}
                >
                  {m.body}
                </p>
              </div>

              {/* Device Assignment Link Underneath */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--ink-08)",
                }}
              >
                <Link
                  href={m.device.href}
                  className="elnor-device-mention-link"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                    textDecoration: "none",
                    padding: "4px 0",
                    transition: "all var(--t-fast)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    <span
                      className="elnor-device-mention-name"
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        transition: "color var(--t-fast)",
                      }}
                    >
                      {m.device.name}
                    </span>
                    <ArrowRight size={13} className="elnor-device-mention-arrow" color="var(--bronze)" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--ink-40)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {m.device.feature}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ol>

        {/* ── FOOTER: Sequence note & Link to full guide ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "24px",
            borderTop: "1px solid var(--ink-08)",
            fontSize: "0.84rem",
          }}
          className="elnor-ritual-footer"
        >
          <Link
            href="/ritual"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--ink)",
              fontWeight: 650,
              textDecoration: "none",
              borderBottom: "1.5px solid var(--bronze)",
              paddingBottom: "2px",
              transition: "all var(--t-fast)",
            }}
          >
            <span>Read the full 15-minute sequence</span>
            <ArrowRight size={14} color="var(--bronze)" />
          </Link>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-40)",
            }}
          >
            A sequence to follow, not a prescription.
          </span>
        </div>

      </div>

      <style jsx>{`
        .elnor-ritual-header {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: flex-end;
          margin-bottom: 32px;
        }

        .elnor-movement-card:hover .elnor-movement-img {
          transform: scale(1.035);
        }

        .elnor-device-mention-link:hover .elnor-device-mention-name {
          color: var(--bronze) !important;
        }

        .elnor-device-mention-link:hover .elnor-device-mention-arrow {
          transform: translateX(3px);
          transition: transform 0.2s ease;
        }

        @media (max-width: 960px) {
          .elnor-ritual-header {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .elnor-ritual-movements-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .elnor-movement-photo-frame {
            aspect-ratio: 16 / 10 !important;
          }
          .elnor-ritual-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
