"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Volume2, ShieldCheck, Zap } from "lucide-react";
import ComparisonTable from "@/components/ComparisonTable";

const TRADITIONS = [
  {
    kanji: "温泉",
    name: "Onsen",
    origin: "Japan",
    image: "/images/editorial/editorial-thermal-spring.jpg",
    metric: "42°C Thermal Window",
    discipline: "Thermal Vasodilation & Nervous Grounding",
    body: "Natural volcanic springs have served as Japan's restorative centers for millennia. In Onsen philosophy, warmth must always precede physical touch. Gentle constant heat stimulates local micro-capillaries, softens rigid connective collagen, and prepares the central nervous system. This is the physiological origin of ELNOR's calibrated 42°C-55°C graphene thermal architecture.",
  },
  {
    kanji: "찜질방",
    name: "Jjimjilbang",
    origin: "Korea",
    image: "/images/editorial/editorial-sauna-interior.jpg",
    metric: "Daily Ritual Habit",
    discipline: "Unhurried Habitual Recovery",
    body: "Korean bathhouse culture is built around slow, social, unhurried restoration — designed to be practiced daily rather than reserved for emergency weekends. Physical renewal requires consistent, low-stress habits. ELNOR devices are built cordless and lightweight so they live effortlessly on your desk, nightstand, or carry-on.",
  },
  {
    kanji: "指圧",
    name: "Shiatsu",
    origin: "Japan",
    image: "/images/editorial/editorial-shiatsu-shoulder.jpg",
    metric: "4-Node Rotational Kinematics",
    discipline: "Neuromuscular Acupoint Precision",
    body: "Literally meaning 'finger pressure', Shiatsu targets exact meridian junctions to release trapped myofascial constriction without blunt trauma. Rather than noisy, repetitive hammer percussion, ELNOR incorporates multi-directional rotational kinetic nodes and oscillating airbags that mimic human palms.",
  },
];

export default function SciencePage() {
  return (
    <div className="science-page" style={{ paddingTop: "clamp(36px, 5vw, 64px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}>
      <div className="container">
        {/* Header */}
        <div className="science-header" style={{ maxWidth: "760px", marginBottom: "56px" }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Biological Foundations
          </div>
          <h1 className="headline-hero" style={{ fontSize: "clamp(2.3rem, 4.8vw, 3.8rem)" }}>
            Borrowed from Tradition. <br />
            <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>Engineered for Human Biology.</em>
          </h1>
          <p className="subheadline" style={{ marginTop: "16px" }}>
            We rejected loud vibrating plastic. ELNOR synthesizes centuries of
            Eastern restorative bathhouse traditions with precision kinetic
            engineering.
          </p>
        </div>

        {/* 3 Traditions Cards with Editorial Photography */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            marginBottom: "72px",
          }}
          className="traditions-page-grid science-traditions-grid"
        >
          {TRADITIONS.map((trad, idx) => (
            <div
              key={idx}
              className="stone-card science-tradition-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Editorial Photograph */}
              <div
                className="science-tradition-image"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  background: "var(--bg-stone-light)",
                }}
              >
                <Image
                  src={trad.image}
                  alt={trad.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(26,25,23,0.55) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-editorial)",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    {trad.kanji}
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(8px)",
                      color: "var(--text-ink)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "var(--radius-pill)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {trad.origin}
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "14px",
                    right: "14px",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {trad.metric}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-ink)", fontFamily: "var(--font-sans)", marginBottom: "4px" }}>
                  {trad.name}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--accent-bronze)",
                    fontWeight: 600,
                    display: "block",
                  }}
                >
                  {trad.discipline}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-body)",
                  lineHeight: 1.65,
                }}
              >
                {trad.body}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Standards Panel */}
        <div
          className="pebble-card science-engineering-panel"
          style={{
            padding: "clamp(28px, 5vw, 44px)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "72px",
            background: "var(--bg-stone)",
          }}
        >
          <div className="eyebrow">Acoustic &amp; Thermal Benchmarks</div>
          <h2 className="headline-section" style={{ fontSize: "2rem", marginBottom: "32px" }}>
            The Four Core Engineering Tenets
          </h2>

          <div
            className="science-tenets-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "24px",
            }}
          >
            <div
              className="science-tenet-card"
              style={{
                background: "var(--bg-surface)",
                padding: "24px 20px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line-hairline)",
              }}
            >
              <div className="science-tenet-photo">
                <Image
                  src="/images/editorial/editorial-steam-over-stones.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-bronze-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-bronze)",
                  marginBottom: "16px",
                }}
              >
                <Flame size={20} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 650, color: "var(--text-ink)", marginBottom: "8px" }}>
                Graphene Thermal Film
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Unlike coiled metal wires that create hot spots and risk burns,
                ELNOR utilizes pure graphene atom sheets for uniform 3-second
                infrared heat penetration.
              </p>
            </div>

            <div
              className="science-tenet-card"
              style={{
                background: "var(--bg-surface)",
                padding: "24px 20px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line-hairline)",
              }}
            >
              <div className="science-tenet-photo">
                <Image
                  src="/images/editorial/editorial-smoke-on-black.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-sage-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-sage)",
                  marginBottom: "16px",
                }}
              >
                <Volume2 size={20} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 650, color: "var(--text-ink)", marginBottom: "8px" }}>
                Whisper-Drive Motors
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                High-torque brushless magnetic motors calibrated under 38dB.
                Enjoy evening restoration without distracting family members or
                breaking calm meditation.
              </p>
            </div>

            <div
              className="science-tenet-card"
              style={{
                background: "var(--bg-surface)",
                padding: "24px 20px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line-hairline)",
              }}
            >
              <div className="science-tenet-photo">
                <Image
                  src="/images/editorial/editorial-towels-and-candles.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-bronze-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-bronze)",
                  marginBottom: "16px",
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 650, color: "var(--text-ink)", marginBottom: "8px" }}>
                Hypoallergenic Contact Liners
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Breathable protein leather and washable micro-mesh fabrics that
                feel gentle against bare skin, preventing sweat accumulation and
                hair pulling.
              </p>
            </div>

            <div
              className="science-tenet-card"
              style={{
                background: "var(--bg-surface)",
                padding: "24px 20px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line-hairline)",
              }}
            >
              <div className="science-tenet-photo">
                <Image
                  src="/images/editorial/editorial-ceramic-and-smoke.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-sage-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-sage)",
                  marginBottom: "16px",
                }}
              >
                <Zap size={20} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 650, color: "var(--text-ink)", marginBottom: "8px" }}>
                Universal USB-C Power
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Long-lasting high-density lithium cells rechargeable via any standard
                USB-C cable, eliminating proprietary chargers and bulky cords forever.
              </p>
            </div>
          </div>
        </div>

        {/* Head-to-Head Comparison */}
        <ComparisonTable />

        {/* CTA to Store */}
        <div
          className="stone-card"
          style={{
            marginTop: "64px",
            textAlign: "center",
            padding: "clamp(36px, 6vw, 56px) 24px",
            background: "var(--bg-surface)",
          }}
        >
          <h2 className="headline-section" style={{ fontSize: "2.2rem" }}>
            Experience the Calibration.
          </h2>
          <p style={{ color: "var(--text-body)", marginTop: "12px", marginBottom: "28px" }}>
            Explore the 7-device ecosystem crafted for daily restoration.
          </p>
          <Link href="/products" className="btn-primary-ink">
            <span>Explore All 7 Devices</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .science-tenet-card {
          overflow: hidden;
          border: 0 !important;
          box-shadow: 0 14px 34px rgba(26, 25, 23, 0.07);
          transition: transform var(--t-mid), box-shadow var(--t-mid);
        }
        .science-tenet-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 42px rgba(26, 25, 23, 0.11);
        }
        .science-tradition-card {
          border: 0 !important;
          box-shadow: 0 14px 36px rgba(26, 25, 23, 0.08) !important;
        }
        .science-tradition-card:hover {
          box-shadow: 0 20px 46px rgba(26, 25, 23, 0.12) !important;
        }
        .science-engineering-panel {
          border: 0 !important;
          box-shadow: 0 22px 52px rgba(26, 25, 23, 0.08) !important;
          background:
            radial-gradient(circle at 100% 0%, rgba(212, 178, 120, 0.2), transparent 31%),
            var(--bg-stone) !important;
        }
        .science-tenet-photo {
          position: relative;
          height: 142px;
          margin: -24px -20px 20px;
          overflow: hidden;
          background: var(--bg-stone-light);
        }
        .science-page :global(.comparison-wrapper) {
          border-radius: var(--radius-lg);
        }
        @media (max-width: 900px) {
          .traditions-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .science-page {
            padding-top: 26px !important;
            padding-bottom: 64px !important;
          }
          .science-header {
            margin-bottom: 34px !important;
          }
          .science-header :global(.headline-hero) {
            font-size: clamp(2.15rem, 10.4vw, 2.7rem) !important;
            line-height: 1.06 !important;
          }
          .science-header :global(.subheadline) {
            font-size: .98rem !important;
            line-height: 1.6 !important;
          }
          .science-traditions-grid {
            gap: 16px !important;
            margin-bottom: 48px !important;
          }
          .science-tradition-card {
            padding: 16px !important;
            gap: 14px !important;
            border-radius: var(--radius-md) !important;
          }
          .science-tradition-image {
            height: 210px !important;
          }
          .science-engineering-panel {
            padding: 18px !important;
            margin-bottom: 48px !important;
            border-radius: var(--radius-md) !important;
          }
          .science-engineering-panel :global(.headline-section) {
            font-size: 1.65rem !important;
            line-height: 1.12 !important;
            margin-bottom: 22px !important;
          }
          .science-tenets-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .science-tenet-photo {
            height: 160px;
          }
          .science-tenet-card {
            border-radius: var(--radius-sm) !important;
            box-shadow: 0 10px 26px rgba(26, 25, 23, 0.07) !important;
          }
        }
      `}</style>
    </div>
  );
}
