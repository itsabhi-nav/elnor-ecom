"use client";

import React, { useState } from "react";
import { ShieldCheck, Truck, Headphones, Copy, Check, CheckCircle2 } from "lucide-react";
import FaqSection from "@/components/FaqSection";

export default function CarePage() {
  const [copied, setCopied] = useState(false);
  const [warrantySubmitted, setWarrantySubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("care@elnor.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWarrantyRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setWarrantySubmitted(true);
  };

  return (
    <div style={{ paddingTop: "clamp(36px, 5vw, 64px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "700px", marginBottom: "56px" }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Concierge Support &amp; Protection
          </div>
          <h1 className="headline-hero" style={{ fontSize: "clamp(2.4rem, 4.8vw, 4rem)" }}>
            Care &amp; Guarantee.
          </h1>
          <p className="subheadline" style={{ marginTop: "16px" }}>
            Every ELNOR device is backed by direct replacement warranty coverage,
            accessible customer wellness specialists, and express dispatch across
            India.
          </p>
        </div>

        {/* 3 Pillars Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "56px",
          }}
          className="care-pillars-grid"
        >
          <div
            className="stone-card"
            style={{
              padding: "32px 28px",
              background: "var(--bg-surface)",
            }}
          >
            <ShieldCheck size={28} color="var(--accent-bronze)" style={{ marginBottom: "16px" }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-ink)", marginBottom: "8px", fontFamily: "var(--font-sans)" }}>
              1-Year Direct Replacement
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.6 }}>
              No tedious repair diagnostics. If your device malfunctions within
              365 days of purchase, our New Delhi hub dispatches a brand-new unit.
            </p>
          </div>

          <div
            className="stone-card"
            style={{
              padding: "32px 28px",
              background: "var(--bg-surface)",
            }}
          >
            <Truck size={28} color="var(--accent-sage)" style={{ marginBottom: "16px" }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-ink)", marginBottom: "8px", fontFamily: "var(--font-sans)" }}>
              Express Air Fulfillment
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.6 }}>
              Orders on both our official website and Amazon.in are dispatched via
              air express couriers with real-time SMS &amp; WhatsApp tracking.
            </p>
          </div>

          <div
            className="stone-card"
            style={{
              padding: "32px 28px",
              background: "var(--bg-surface)",
            }}
          >
            <Headphones size={28} color="var(--accent-bronze)" style={{ marginBottom: "16px" }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-ink)", marginBottom: "8px", fontFamily: "var(--font-sans)" }}>
              Dedicated Wellness Concierge
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.6 }}>
              Have questions regarding device usage, pairing, or corporate gifting?
              Our in-house specialists respond within 4 business hours.
            </p>
          </div>
        </div>

        {/* Warranty Registration & Concierge Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "start",
            marginBottom: "72px",
          }}
          className="warranty-grid"
        >
          {/* Warranty Registration Form */}
          <div
            className="stone-card"
            style={{
              padding: "clamp(28px, 4vw, 40px)",
              background: "var(--bg-surface)",
            }}
          >
            <div className="eyebrow">Warranty Portal</div>
            <h2 className="headline-section" style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
              Register Your Device
            </h2>
            <p style={{ fontSize: "0.92rem", color: "var(--text-body)", marginBottom: "28px" }}>
              Purchased via Amazon.in or our website? Activate your 1-Year Comprehensive
              Replacement Warranty certificate below.
            </p>

            {warrantySubmitted ? (
              <div
                style={{
                  padding: "24px",
                  background: "var(--accent-sage-soft)",
                  border: "1px solid var(--accent-sage-border)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: "var(--accent-sage)",
                }}
              >
                <CheckCircle2 size={26} color="var(--accent-sage)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>Device Successfully Registered!</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-body)", marginTop: "2px" }}>
                    Warranty certificate and concierge card dispatched to your email.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWarrantyRegister} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 600 }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Abhinav Kumar"
                      style={{
                        width: "100%",
                        background: "var(--bg-stone-light)",
                        border: "1px solid var(--line-medium)",
                        borderRadius: "var(--radius-sm)",
                        padding: "11px 14px",
                        fontSize: "0.88rem",
                        color: "var(--text-ink)",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 600 }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="abhinav@example.com"
                      style={{
                        width: "100%",
                        background: "var(--bg-stone-light)",
                        border: "1px solid var(--line-medium)",
                        borderRadius: "var(--radius-sm)",
                        padding: "11px 14px",
                        fontSize: "0.88rem",
                        color: "var(--text-ink)",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 600 }}>
                      Amazon Order ID or Invoice #
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="408-1234567-8901234"
                      style={{
                        width: "100%",
                        background: "var(--bg-stone-light)",
                        border: "1px solid var(--line-medium)",
                        borderRadius: "var(--radius-sm)",
                        padding: "11px 14px",
                        fontSize: "0.88rem",
                        color: "var(--text-ink)",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 600 }}>
                      Purchased Device
                    </label>
                    <select
                      style={{
                        width: "100%",
                        background: "var(--bg-stone-light)",
                        border: "1px solid var(--line-medium)",
                        borderRadius: "var(--radius-sm)",
                        padding: "11px 14px",
                        fontSize: "0.88rem",
                        color: "var(--text-ink)",
                        outline: "none",
                      }}
                    >
                      <option>ELNOR 3D Neck Massager (B0CX4ST3JH)</option>
                      <option>ELNOR Cordless Scalp Cap (B0H4RHQHTC)</option>
                      <option>ELNOR Dynamic Cupping Device (B0CX1KYQZJ)</option>
                      <option>ELNOR Aura Smart Eye Massager (B0H3QKWFND)</option>
                      <option>ELNOR Thermal Abdominal Belt (B0CQTLCX2D)</option>
                      <option>ELNOR Kinetic Joint Knee Massager (B0CR184KSY)</option>
                      <option>ELNOR Sculpt Lymphatic Device (B0H6SYTF7V)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary-ink"
                  style={{ marginTop: "12px", width: "100%", padding: "13px", justifyContent: "center" }}
                >
                  Activate 1-Year Guarantee Certificate
                </button>
              </form>
            )}
          </div>

          {/* Direct Concierge Contact Card */}
          <div
            className="pebble-card"
            style={{
              padding: "clamp(28px, 4vw, 36px)",
              background: "var(--bg-stone)",
            }}
          >
            <div className="eyebrow">Customer Care</div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-ink)", marginBottom: "10px", fontFamily: "var(--font-sans)" }}>
              Reach Our Specialist Team
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.6, marginBottom: "24px" }}>
              For bulk corporate gifting, spare parts, or questions on how to position
              your device for optimal myofascial therapy:
            </p>

            <div
              style={{
                padding: "16px",
                background: "var(--bg-surface)",
                border: "1px solid var(--line-hairline)",
                borderRadius: "var(--radius-md)",
                marginBottom: "20px",
                boxShadow: "var(--shadow-subtle)",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                Official Concierge Email:
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-ink)", fontFamily: "var(--font-mono)" }}>
                care@elnor.in
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="btn-secondary-stone"
              style={{ width: "100%", padding: "12px", marginBottom: "28px", justifyContent: "center" }}
            >
              {copied ? (
                <>
                  <Check size={16} color="var(--accent-sage)" />
                  <span>Email Copied</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Support Email</span>
                </>
              )}
            </button>

            <div style={{ borderTop: "1px solid var(--line-medium)", paddingTop: "20px" }}>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <strong style={{ color: "var(--text-ink)", display: "block", marginBottom: "4px" }}>
                  ELNOR Corporate Headquarters
                </strong>
                Maurex Tradings, India.<br />
                Certified Service Hubs: New Delhi, Bengaluru &amp; Mumbai.<br />
                Operating Hours: Monday – Saturday, 9:30 AM – 6:30 PM IST.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete FAQ Section */}
      <FaqSection />

      <style jsx>{`
        @media (max-width: 860px) {
          .care-pillars-grid {
            grid-template-columns: 1fr !important;
          }
          .warranty-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
