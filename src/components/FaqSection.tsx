"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Phone, Mail, MapPin, Clock, MessageSquareQuote } from "lucide-react";

const FAQS = [
  {
    q: "How long does it take to see results from daily use?",
    a: "Most users report meaningful relief within 3–5 days of daily 15-minute sessions. Chronic conditions like cervical spondylosis or desk-induced tech neck typically require 2–3 weeks of consistent use for lasting structural posture improvement. Acute muscle stiffness eases within the first 10 minutes of calibrated 42°C thermal therapy.",
  },
  {
    q: "Are ELNOR devices safe for people with existing health conditions?",
    a: "ELNOR devices are designed for restorative wellness. However, individuals with pacemakers, deep vein thrombosis (DVT), acute inflammatory trauma, or who are pregnant should consult a physician before using kinetic or thermal devices. Always start on the gentlest setting and avoid open or inflamed skin.",
  },
  {
    q: "What is covered under the 1-Year Direct Replacement Warranty?",
    a: "Every ELNOR device includes a full 1-Year Direct Doorstep Replacement Guarantee. If your device experiences motor faults, battery degradation, heating element failure, or manufacturing defects, our logistics partner will collect it directly from your doorstep and deliver a brand new sealed replacement.",
  },
  {
    q: "Can I use ELNOR devices while travelling?",
    a: "Yes. All cordless models operate on standard 5V USB-C power, use airline cabin-approved lithium-ion cells, and include universal international voltage compatibility. The Cap, Eye Massager, and Cupping device fold flat and slip into carry-on luggage with zero bulk.",
  },
  {
    q: "How do I clean and maintain my ELNOR device?",
    a: "Wipe exterior surfaces with a lightly dampened microfiber cloth after use. Never submerge devices in liquid. Removable contact liners (such as on the Cap and Eye Massager) are hand-washable with mild detergent. Keep away from direct sunlight when storing.",
  },
  {
    q: "Why should I buy from ELNOR directly vs a generic massager?",
    a: "Generic massagers use uncalibrated vibrating plastic motors with high noise (>65 dB) and unregulated heating wires that can burn skin. ELNOR devices feature Japanese-calibrated Shiatsu kinematic nodes, ±0.5°C constant graphene thermal windows, brushless motors (<38 dB whisper operation), and Amazon India-verified clinical reviews.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--ink-10)",
        transition: "background var(--t-fast)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: open ? "var(--bronze)" : "var(--ink-40)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              paddingTop: "3px",
              flexShrink: 0,
              transition: "color var(--t-fast)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
              fontWeight: open ? 700 : 600,
              color: open ? "var(--ink)" : "var(--ink-80)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
              transition: "all var(--t-fast)",
            }}
          >
            {q}
          </span>
        </div>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open ? "var(--surface-raised)" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all var(--t-fast)",
          }}
        >
          <ChevronDown
            size={16}
            color={open ? "var(--bronze)" : "var(--ink-40)"}
            style={{
              transition: "transform var(--t-mid)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>

      {open && (
        <div
          style={{
            paddingBottom: "22px",
            paddingLeft: "36px",
            paddingRight: "16px",
            animation: "fadeIn 0.22s ease",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--ink-70)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
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
      }}
    >
      <div className="container">
        <div className="elnor-faq-grid">

          {/* ── LEFT SIDEBAR: Static on mobile, sticky ONLY on wide desktop ── */}
          <div className={`elnor-faq-sidebar reveal ${revealed ? "is-visible" : ""}`}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>
              <span className="eyebrow-dot" />
              <span>Common Questions · 05</span>
            </div>

            <h2
              className="headline-section"
              style={{
                lineHeight: 1.15,
                marginBottom: "14px",
              }}
            >
              Everything you need{" "}
              <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>to know.</em>
            </h2>

            <p
              className="subheadline"
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "var(--ink-60)",
                marginBottom: "24px",
              }}
            >
              Can&apos;t find what you&apos;re looking for? Our concierge team responds within 
              4 hours on weekdays.
            </p>

            {/* Concierge Support Card */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--ink-10)",
                borderRadius: "var(--r-xl)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                boxShadow: "0 4px 18px rgba(26, 25, 23, 0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  Concierge Support
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--sage-mid)",
                    background: "var(--sage-soft)",
                    padding: "2px 8px",
                    borderRadius: "var(--r-pill)",
                    fontWeight: 600,
                  }}
                >
                  Active
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="mailto:care@elnor.in"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.84rem",
                    color: "var(--ink)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <Mail size={15} color="var(--bronze)" style={{ flexShrink: 0 }} />
                  <span>care@elnor.in</span>
                </a>

                <a
                  href="tel:+918000000000"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.84rem",
                    color: "var(--ink-70)",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={15} color="var(--bronze)" style={{ flexShrink: 0 }} />
                  <span>+91-XXXXX-XXXXX</span>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.8rem",
                    color: "var(--ink-50)",
                  }}
                >
                  <MapPin size={15} color="var(--ink-40)" style={{ flexShrink: 0 }} />
                  <span>Air Dispatch: New Delhi, India</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.74rem",
                  color: "var(--ink-60)",
                  paddingTop: "10px",
                  borderTop: "1px solid var(--ink-08)",
                }}
              >
                <Clock size={12} color="var(--bronze)" />
                <span>Response window: &lt;4 hours (Mon–Fri)</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Accordion Questions ── */}
          <div className={`reveal ${revealed ? "is-visible" : ""} reveal-delay-1`}>
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .elnor-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 52px;
          align-items: start;
        }

        /* Desktop sticky behavior: only active when screen is wide enough */
        @media (min-width: 961px) {
          .elnor-faq-sidebar {
            position: sticky;
            top: 108px;
            align-self: start;
          }
        }

        /* Mobile & Tablet: STRICTLY STATIC so questions never scroll underneath! */
        @media (max-width: 960px) {
          .elnor-faq-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }

          .elnor-faq-sidebar {
            position: static !important;
            top: auto !important;
            margin-bottom: 8px;
          }
        }
      `}</style>
    </section>
  );
}
