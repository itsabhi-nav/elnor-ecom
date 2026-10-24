"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Flame, Sparkles, Activity } from "lucide-react";

interface TraditionItem {
  code: string;
  country: string;
  name: string;
  tradition: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  metricNote: string;
  plate: string;
  image: string;
  imageCaption: string;
  featuredDevice: {
    name: string;
    href: string;
  };
}

const ORIGINS: TraditionItem[] = [
  {
    code: "JPN",
    country: "Japan",
    name: "Japanese Onsen",
    tradition: "Thermal Hydrotherapy",
    tagline: "Warmth, before anything else.",
    description:
      "For over 1,000 years, Japan's volcanic onsen culture has used 41–43°C mineral water to down-regulate sympathetic cortisol, dilate peripheral micro-vessels, and accelerate post-exertion recovery. ELNOR's graphene heating elements replicate this exact biological window.",
    metric: "42°C",
    metricLabel: "Optimal therapeutic range",
    metricNote: "Precision graphene thermal gate with ±0.5°C constant temperature stability",
    plate: "PL. 01 · VOLCANIC THERMAL HYDROTHERAPY",
    image: "/images/editorial/editorial-hot-stone-treatment.jpg",
    imageCaption: "Volcanic basalt and mineral thermal warmth — the origin of ELNOR's constant 42°C infrared heat.",
    featuredDevice: {
      name: "Cervical 3D Neck Massager",
      href: "/products/elnor-neck-pillow",
    },
  },
  {
    code: "KOR",
    country: "Korea",
    name: "Korean Jjimjilbang",
    tradition: "Far Infrared Therapy",
    tagline: "Slow, unhurried cellular recovery.",
    description:
      "Korea's communal jjimjilbang bathhouses harness natural far-infrared radiation to penetrate 3–5cm beneath the dermal surface. This stimulates cellular mitochondrial ATP production, accelerates deep lymphatic drainage, and softens chronic fascial rigidity.",
    metric: "3–5 cm",
    metricLabel: "Infrared tissue penetration",
    metricNote: "Far-infrared wavelength activates cellular recovery beneath connective tissue",
    plate: "PL. 02 · FAR-INFRARED CELLULAR RECOVERY",
    image: "/images/editorial/editorial-sauna-interior.jpg",
    imageCaption: "Cedarwood thermal sanctuaries — designed for habitual, slow daily restoration without rush.",
    featuredDevice: {
      name: "Aura Smart Thermal Eye Massager",
      href: "/products/elnor-eye-massager",
    },
  },
  {
    code: "CHN",
    country: "China",
    name: "Traditional Cupping",
    tradition: "Myofascial Decompression",
    tagline: "Dynamic negative-pressure release.",
    description:
      "Rooted in Classical Eastern medicine, negative-pressure decompression lifts and separates adhesed myofascial layers. By clearing micro-vascular stasis and increasing localized perfusion by up to 30%, it breaks the chronic cycle of postural stiffness.",
    metric: "−600 mmHg",
    metricLabel: "Dynamic vacuum pressure",
    metricNote: "Multi-level rhythmic suction lifts fascial layers to restore microvascular perfusion",
    plate: "PL. 03 · MYOFASCIAL DECOMPRESSION",
    image: "/images/editorial/editorial-shiatsu-shoulder.jpg",
    imageCaption: "Targeted decompression and acupoint release along tense cervical and lumbar meridians.",
    featuredDevice: {
      name: "Smart Dynamic Cupping Device",
      href: "/products/elnor-cupping-device",
    },
  },
];

const TENETS = [
  {
    num: "01",
    title: "Ritual",
    desc: "Self-care that feels like a quiet moment you look forward to, not a clinical chore.",
  },
  {
    num: "02",
    title: "Restore",
    desc: "Relief for the neck, eyes, head, back, and legs that modern routines strain most.",
  },
  {
    num: "03",
    title: "Precision",
    desc: "Considered pressure points, 42°C calibrated thermal window, without guesswork.",
  },
  {
    num: "04",
    title: "Calm",
    desc: "Soft forms, tactile warm tones, and whisper-quiet motors (<38 dB) that belong in a peaceful home.",
  },
];

export default function OriginsAndScience() {
  const [revealed, setRevealed] = useState(false);
  const [active, setActive]     = useState(0);
  const [fading, setFading]     = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const ref                     = useRef<HTMLElement>(null);
  const timerRef                = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRevealed(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Auto-swipe through the 3 traditions every 3s: JPN -> KOR -> CHN -> JPN
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % ORIGINS.length);
        setFading(false);
      }, 160);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const selectTradition = (idx: number) => {
    if (idx === active) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
      // Restart 3s timer after manual selection
      timerRef.current = setInterval(() => {
        setFading(true);
        setTimeout(() => {
          setActive((prev) => (prev + 1) % ORIGINS.length);
          setFading(false);
        }, 160);
      }, 3000);
    }, 160);
  };

  const current = ORIGINS[active];

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "clamp(56px, 7vw, 92px)",
        paddingBottom: "clamp(56px, 7vw, 92px)",
        background: "var(--canvas)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* ── SECTION HEADER ── */}
        <div style={{ maxWidth: "680px", marginBottom: "clamp(32px, 4.5vw, 48px)" }}>
          <div className="eyebrow" style={{ marginBottom: "14px" }}>
            <span className="eyebrow-dot" />
            <span>Origins & Science · 03</span>
          </div>

          <h2
            className="headline-section"
            style={{
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Ancient wisdom,{" "}
            <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>
              modern engineering.
            </em>
          </h2>

          <p
            className="subheadline"
            style={{
              fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
              lineHeight: 1.6,
              color: "var(--ink-70)",
            }}
          >
            Every ELNOR device is built on three deeply researched healing traditions — 
            translated into precision hardware that delivers measurable physiological outcomes.
          </p>
        </div>

        {/* ── EDITORIAL SPLIT SHOWCASE ── */}
        <div className="origins-split-grid">

          {/* LEFT COLUMN: Editorial Photography Plate Frame */}
          <div className="origins-plate-wrapper">
            <div className="origins-plate-frame">
              {/* Museum Plate Badge */}
              <div className="origins-plate-badge">
                <span className="origins-plate-code">{current.plate}</span>
              </div>

              {/* High-Resolution Editorial Image */}
              <div className="origins-image-box">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.28s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: fading ? 0.4 : 1,
                    transform: fading ? "scale(1.02)" : "scale(1)",
                  }}
                />
                <div className="origins-plate-gradient" />
              </div>

              {/* Floating Caption Overlay */}
              <div className="origins-caption-overlay">
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <Sparkles size={13} color="var(--bronze)" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--bronze)",
                      fontWeight: 600,
                    }}
                  >
                    Tradition Archive · {current.code}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.05rem, 1.35vw, 1.25rem)",
                    fontStyle: "italic",
                    color: "#FFFFFF",
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  &ldquo;{current.tagline}&rdquo;
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255, 255, 255, 0.76)",
                    lineHeight: 1.45,
                    marginTop: "6px",
                    marginBottom: 0,
                  }}
                >
                  {current.imageCaption}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Selector & Clinical Blueprints */}
          <div className="origins-content-col">

            {/* Tradition Navigation Tabs */}
            <div className="origins-tabs-list" role="tablist">
              {ORIGINS.map((item, idx) => {
                const isSelected = idx === active;
                return (
                  <button
                    key={item.code}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => selectTradition(idx)}
                    className={`origins-tab-btn ${isSelected ? "is-active" : ""}`}
                  >
                    <div className="origins-tab-code">{item.code}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="origins-tab-name">{item.name}</div>
                      <div className="origins-tab-tradition">{item.tradition}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Tradition Detail Blueprint */}
            <div
              className="origins-detail-card"
              style={{
                opacity: fading ? 0.3 : 1,
                transform: fading ? "translateY(4px)" : "translateY(0)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {/* Header Info */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--bronze)",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {current.code} · {current.tradition}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.2vw, 1.95rem)",
                    fontWeight: 600,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                  }}
                >
                  {current.name}
                </h3>
              </div>

              {/* Physiological Narrative */}
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--ink-70)",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                }}
              >
                {current.description}
              </p>

              {/* Physiological Metric Banner */}
              <div className="origins-metric-banner">
                <div className="origins-metric-val">{current.metric}</div>
                <div className="origins-metric-meta">
                  <div className="origins-metric-label">{current.metricLabel}</div>
                  <div className="origins-metric-note">{current.metricNote}</div>
                </div>
              </div>

              {/* Applied Hardware Translation */}
              <div className="origins-device-bridge">
                <span style={{ fontSize: "0.78rem", color: "var(--ink-50)", fontWeight: 500 }}>
                  Engineered into:
                </span>
                <Link
                  href={current.featuredDevice.href}
                  className="origins-device-link"
                >
                  <span>{current.featuredDevice.name}</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* ── PHILOSOPHY / TENETS ROW (From 3001) ── */}
        <div className="origins-tenets-section">
          <div className="origins-tenets-header">
            <span className="eyebrow" style={{ fontSize: "0.7rem" }}>What We Stand For</span>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)",
                fontWeight: 600,
                color: "var(--ink)",
                margin: "4px 0 0",
              }}
            >
              Quiet design, honest relief.
            </h4>
          </div>

          <div className="origins-tenets-grid">
            {TENETS.map((t) => (
              <div key={t.num} className="origins-tenet-card">
                <div className="origins-tenet-num">{t.num}</div>
                <div className="origins-tenet-title">{t.title}</div>
                <p className="origins-tenet-desc">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Link to Full Science Page */}
          <div style={{ marginTop: "28px", textAlign: "center" }}>
            <Link
              href="/science"
              className="btn btn-ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                fontSize: "0.85rem",
              }}
            >
              <span>Explore Biological Foundations & Comparative Data</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      <style jsx>{`
        .origins-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
          margin-bottom: clamp(40px, 6vw, 64px);
        }

        .origins-plate-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .origins-plate-frame {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 480px;
          border-radius: var(--r-xl);
          overflow: hidden;
          background: #111111;
          box-shadow: 0 12px 36px rgba(26, 25, 23, 0.08);
          border: 1px solid var(--ink-08);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .origins-image-box {
          position: absolute;
          inset: 0;
        }

        .origins-plate-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15) 0%,
            transparent 35%,
            rgba(17, 17, 17, 0.7) 70%,
            rgba(17, 17, 17, 0.94) 100%
          );
          pointer-events: none;
        }

        .origins-plate-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          padding: 6px 14px;
          border-radius: var(--r-pill);
          box-shadow: var(--e-1);
        }

        .origins-plate-code {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--ink);
          font-weight: 600;
        }

        .origins-caption-overlay {
          position: relative;
          z-index: 2;
          padding: 24px 28px;
        }

        .origins-content-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: space-between;
        }

        .origins-tabs-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .origins-tab-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 14px 14px;
          border-radius: var(--r-md);
          border: 1px solid var(--ink-10);
          background: var(--surface);
          cursor: pointer;
          text-align: left;
          transition: all var(--t-fast);
        }

        .origins-tab-btn:hover {
          border-color: var(--ink-25);
          background: var(--surface-raised);
        }

        .origins-tab-btn.is-active {
          border-color: var(--bronze);
          background: var(--surface);
          box-shadow: 0 2px 10px rgba(160, 114, 62, 0.12);
        }

        .origins-tab-code {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          font-weight: 700;
          color: var(--bronze);
          margin-bottom: 4px;
        }

        .origins-tab-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.25;
        }

        .origins-tab-tradition {
          font-size: 0.72rem;
          color: var(--ink-50);
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .origins-detail-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(24px, 3.2vw, 36px);
          background: var(--surface);
          border: 1px solid var(--ink-10);
          border-radius: var(--r-lg);
          box-shadow: 0 4px 20px rgba(26, 25, 23, 0.04);
        }

        .origins-metric-banner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 16px 20px;
          border-radius: var(--r-md);
          background: var(--surface-raised);
          border: 1px solid var(--ink-08);
          margin-bottom: 20px;
        }

        .origins-metric-val {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 3.2vw, 2.7rem);
          font-weight: 700;
          color: var(--bronze);
          line-height: 1;
          flex-shrink: 0;
        }

        .origins-metric-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .origins-metric-label {
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--ink);
        }

        .origins-metric-note {
          font-size: 0.76rem;
          color: var(--ink-60);
          line-height: 1.4;
        }

        .origins-device-bridge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid var(--ink-08);
          flex-wrap: wrap;
        }

        .origins-device-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          padding: 4px 10px;
          border-radius: var(--r-pill);
          background: var(--surface-raised);
          border: 1px solid var(--ink-10);
          transition: all var(--t-fast);
        }

        .origins-device-link:hover {
          border-color: var(--bronze);
          color: var(--bronze);
        }

        /* Tenets / Philosophy */
        .origins-tenets-section {
          padding-top: clamp(28px, 4vw, 44px);
          border-top: 1px solid var(--ink-10);
        }

        .origins-tenets-header {
          margin-bottom: 24px;
        }

        .origins-tenets-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .origins-tenet-card {
          padding: 20px;
          border-radius: var(--r-md);
          background: var(--surface);
          border: 1px solid var(--ink-08);
          transition: transform var(--t-mid), box-shadow var(--t-mid);
        }

        .origins-tenet-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--e-1);
        }

        .origins-tenet-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--bronze);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .origins-tenet-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .origins-tenet-desc {
          font-size: 0.78rem;
          color: var(--ink-60);
          line-height: 1.5;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .origins-split-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .origins-plate-frame {
            min-height: 380px;
          }

          .origins-tenets-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .origins-tabs-list {
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
          }

          .origins-tab-btn {
            padding: 10px 8px;
          }

          .origins-tab-name {
            font-size: 0.76rem;
          }

          .origins-tab-tradition {
            font-size: 0.65rem;
            display: none;
          }

          .origins-plate-frame {
            min-height: 320px;
          }

          .origins-caption-overlay {
            padding: 16px 18px;
          }

          /* Refined 2x2 grid on mobile so it doesn't take 4 full screen-width cards */
          .origins-tenets-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .origins-tenet-card {
            padding: 14px 12px;
          }

          .origins-tenet-num {
            font-size: 0.68rem;
            margin-bottom: 4px;
          }

          .origins-tenet-title {
            font-size: 1rem;
            margin-bottom: 4px;
          }

          .origins-tenet-desc {
            font-size: 0.72rem;
            line-height: 1.45;
          }
        }
      `}</style>
    </section>
  );
}
