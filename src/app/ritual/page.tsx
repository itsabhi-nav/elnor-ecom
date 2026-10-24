"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, Wind, Moon, Play, Pause, RotateCcw, CheckCircle2, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

const PHASES = [
  {
    phase: "01",
    name: "Warm",
    minutes: 5,
    tag: "Heat — 3 quick-heat levels",
    icon: Flame,
    color: "#8F6B3E",
    headline: "Warmth first",
    summary:
      "Gentle heat relaxes the muscles and prepares the body, the way a hot bath opens a spa visit. Start at the lowest of the three heat levels and let it settle.",
    photo: "/images/editorial/editorial-steam-over-stones.jpg",
    scientificBenefits: [
      "Vasodilation increases local capillary blood flow by up to 240%",
      "Thermal stimulation down-regulates sympathetic pain receptor excitability",
      "Softens rigid myofascial collagen for injury-free deep tissue release",
    ],
    recommendedIds: ["elnor-heating-belt", "elnor-neck-pillow"],
  },
  {
    phase: "02",
    name: "Release",
    minutes: 7,
    tag: "Heat — 45°C infrared heat",
    icon: Wind,
    color: "#3E5242",
    headline: "Then the tension",
    summary:
      "Kneading, pressure or suction works into stiff areas at the intensity you choose. Four deep nodes and warmth, and the timer ends the session for you.",
    photo: "/images/editorial/editorial-shiatsu-shoulder.jpg",
    scientificBenefits: [
      "Dynamic negative pressure (-60kPa) lifts adhered fascia layers",
      "Bi-directional rotational motors stimulate trapezius & occipital trigger points",
      "Flushes lactic acid and post-work postural tension effortlessly",
    ],
    recommendedIds: ["elnor-neck-pillow", "elnor-cupping-device"],
  },
  {
    phase: "03",
    name: "Restore",
    minutes: 3,
    tag: "Heat — Gentle warmth",
    icon: Moon,
    color: "#4A6274",
    headline: "Then rest",
    summary:
      "Slow, light pulses as the session winds down. Warmth over the eyes, a little music, and the calm settling. Breathe, sit still.",
    photo: "/images/editorial/editorial-ceramic-and-smoke.jpg",
    scientificBenefits: [
      "Gentle oscillating air compression around temples and optic nerves",
      "Reduces cortisol levels and prepares the pineal gland for melatonin release",
      "Clinically associated with faster onset of deep restorative REM sleep",
    ],
    recommendedIds: ["elnor-eye-massager", "elnor-cap-massager"],
  },
];

export default function RitualPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(15 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const { addToCart } = useCart();

  // Auto-sweep through phases every 3 seconds
  useEffect(() => {
    const sweep = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % PHASES.length);
    }, 3000);
    return () => clearInterval(sweep);
  }, []);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds]);

  const currentPhase = PHASES[activeTab];
  const Icon = currentPhase.icon;
  const matched = PRODUCTS.filter((p) => currentPhase.recommendedIds.includes(p.id));

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ paddingTop: "clamp(36px, 5vw, 64px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" />
            <span>Circadian Reset</span>
            <span style={{ color: "var(--ink-20)" }}>·</span>
            <span style={{ color: "var(--bronze)", fontWeight: 600 }}>Three-Stage Recovery Sequence</span>
          </div>
          <h1 className="headline-hero" style={{ fontSize: "clamp(2.4rem, 4.8vw, 4rem)" }}>
            Fifteen minutes,{" "}
            <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>three stages.</em>
          </h1>
          <p className="subheadline" style={{ marginTop: "16px" }}>
            A spa session follows an order: warm the body, release the tension, then rest.
            Every ELNOR device is built around the same rhythm.
          </p>
        </div>

        {/* Interactive Guided Ritual Timer Console */}
        <div
          className="stone-card"
          style={{
            padding: "clamp(32px, 5vw, 48px)",
            marginBottom: "56px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              fontSize: "0.82rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent-bronze)",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Interactive Session Companion
          </div>

          <div
            style={{
              fontSize: "clamp(3.5rem, 8vw, 5.8rem)",
              fontWeight: 800,
              fontFamily: "var(--font-mono)",
              color: "var(--text-ink)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: "24px",
            }}
          >
            {formatTime(timerSeconds)}
          </div>

          <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="btn-primary-ink"
              style={{ padding: "12px 28px" }}
            >
              {isRunning ? <Pause size={16} /> : <Play size={16} />}
              <span>{isRunning ? "Pause Session" : "Begin 15-Min Ritual"}</span>
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setTimerSeconds(15 * 60);
              }}
              className="btn-secondary-stone"
              style={{ padding: "12px 20px" }}
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>

          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", maxWidth: "440px" }}>
            Sit comfortably in a dimly lit space. Follow the 3-stage sequence
            below using your paired ELNOR device.
          </p>
        </div>

        {/* 3 Phases Detailed Selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "36px",
          }}
          className="phases-tabs-grid"
        >
          {PHASES.map((p, idx) => {
            const active = activeTab === idx;
            const PhaseIcon = p.icon;
            return (
              <button
                key={p.phase}
                onClick={() => setActiveTab(idx)}
                style={{
                  background: active ? "var(--bg-surface)" : "var(--bg-stone)",
                  border: active
                    ? "1px solid var(--text-ink)"
                    : "1px solid var(--line-hairline)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: active ? "var(--shadow-card)" : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: active ? "var(--accent-bronze)" : "var(--text-muted)",
                    }}
                  >
                    PHASE {p.phase}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.76rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    ≈ {p.minutes} MIN
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <PhaseIcon size={20} color={p.color} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-ink)", fontFamily: "var(--font-sans)" }}>
                    {p.name}
                  </h3>
                </div>

                {active && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "3px",
                      background: "var(--accent-bronze)",
                      width: "100%",
                      animation: "ritualTabSweep 4s linear infinite",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive */}
        <div
          className="stone-card"
          style={{
            padding: "clamp(28px, 5vw, 48px)",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "44px",
              alignItems: "start",
            }}
            className="phase-detail-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--accent-bronze-soft)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-pill)",
                  marginBottom: "16px",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent-bronze)",
                  fontWeight: 600,
                }}
              >
                <Icon size={14} color={currentPhase.color} />
                <span>PHASE {currentPhase.phase} · {currentPhase.tag}</span>
              </div>

              {/* Movement Lifestyle Photograph */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "260px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  marginBottom: "20px",
                  boxShadow: "0 8px 24px rgba(26,25,23,0.06)",
                }}
              >
                <Image
                  src={currentPhase.photo}
                  alt={currentPhase.headline}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <h2 className="headline-section" style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", marginBottom: "14px" }}>
                {currentPhase.headline}
              </h2>

              <p style={{ fontSize: "1.02rem", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "28px" }}>
                {currentPhase.summary}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {currentPhase.scientificBenefits.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.94rem",
                      color: "var(--text-ink)",
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--accent-sage)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Matched Devices */}
            <div
              style={{
                background: "var(--bg-stone-light)",
                border: "1px solid var(--line-hairline)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "0.76rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-bronze)",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Engineered for Phase {currentPhase.phase}:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {matched.map((prod) => (
                  <div
                    key={prod.id}
                    className="matched-device-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "12px",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--line-hairline)",
                      borderRadius: "var(--radius-sm)",
                      boxShadow: "var(--shadow-subtle)",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "60px",
                        height: "60px",
                        flexShrink: 0,
                        background: "var(--bg-stone-light)",
                        borderRadius: "var(--radius-sm)",
                        padding: "4px",
                      }}
                    >
                      <Image
                        src={prod.images[0]}
                        alt={prod.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <Link href={`/products/${prod.id}`} style={{ textDecoration: "none" }}>
                        <h4
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 650,
                            color: "var(--text-ink)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {prod.shortName}
                        </h4>
                      </Link>
                      <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-ink)" }}>
                        ₹{prod.price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "6px" }}>
                      <Link
                        href={`/products/${prod.id}`}
                        className="btn-secondary-stone"
                        style={{ padding: "6px 12px", fontSize: "0.76rem" }}
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => addToCart(prod, 1)}
                        className="btn-primary-ink"
                        style={{ padding: "6px 12px", fontSize: "0.76rem" }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .phases-tabs-grid {
            grid-template-columns: 1fr !important;
          }
          .phase-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .matched-device-row {
            flex-wrap: wrap !important;
            gap: 10px !important;
          }
          .matched-device-row > div:last-child {
            width: 100% !important;
            justify-content: flex-end !important;
          }
        }
        @keyframes ritualTabSweep {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
