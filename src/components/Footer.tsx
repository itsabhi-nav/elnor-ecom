"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const STORE_LINKS = [
  { href: "/products/elnor-neck-pillow",        label: "Cervical 3D Neck Massager" },
  { href: "/products/elnor-cap-massager",       label: "Cordless Smart Cap" },
  { href: "/products/elnor-cupping-device",     label: "Dynamic Cupping Tool" },
  { href: "/products/elnor-eye-massager",       label: "Aura Thermal Eye Massager" },
  { href: "/products/elnor-heating-belt",       label: "Abdominal Heating Belt" },
  { href: "/products/elnor-knee-massager",      label: "Knee & Joint Recovery" },
  { href: "/products/elnor-lymphatic-massager", label: "Lymphatic Body Sculpt" },
];

const EXPLORE_LINKS = [
  { href: "/ritual",  label: "The 15-Min Ritual" },
  { href: "/science", label: "Origins & Science" },
  { href: "/care",    label: "Care & Support" },
  { href: "/products", label: "Full Catalog" },
];

const SUPPORT_LINKS = [
  { href: "/care", label: "Warranty Registration" },
  { href: "/care", label: "FAQ" },
  { href: "mailto:care@elnor.in", label: "care@elnor.in", external: true },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "rgba(255,255,255,0.6)",
        paddingTop: "80px",
        paddingBottom: "40px",
        fontSize: "0.875rem",
      }}
    >
      <div className="container">

        {/* Top section: Brand + Newsletter */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "48px",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            marginBottom: "56px",
            alignItems: "center",
          }}
          className="elnor-footer-top"
        >
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                letterSpacing: "0.22em",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
                marginBottom: "16px",
                lineHeight: 1,
              }}
            >
              ELNOR
            </div>
            <p
              style={{
                maxWidth: "380px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                marginBottom: "20px",
              }}
            >
              Smart kinetic massage and thermal wellness tools engineered to restore 
              the body, ease digital fatigue, and bring Asian spa rituals into your daily life.
            </p>
            <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
              A registered brand of <strong style={{ color: "rgba(255,255,255,0.6)" }}>Maurex Tradings, India</strong>
            </div>
          </div>

          {/* Amazon store CTA */}
          <div
            style={{
              padding: "32px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "var(--r-lg)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "8px",
              }}
            >
              Available on Amazon India
            </div>
            <p style={{ fontSize: "0.8125rem", marginBottom: "20px", lineHeight: 1.6 }}>
              All 7 devices with Prime delivery, Easy returns, and Amazon Pay.
            </p>
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "var(--r-pill)",
                background: "#FFB84D",
                color: "#181716",
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "all var(--t-fast)",
              }}
            >
              <span>Visit Amazon Store</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Main link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gap: "40px",
            marginBottom: "56px",
          }}
          className="elnor-footer-links"
        >
          {/* Store */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Store & Range
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {STORE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color var(--t-fast)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              The Experience
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {EXPLORE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color var(--t-fast)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Care & Guarantee
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {SUPPORT_LINKS.map((l) => (
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{
                      color: "var(--bronze-mid)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color var(--t-fast)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    {l.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <div>© 2026 ELNOR · Maurex Tradings, India. All rights reserved.</div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <span>UPI</span>
            <span>Cards</span>
            <span>NetBanking</span>
            <span>Amazon Pay</span>
            <span>Cash on Delivery</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .elnor-footer-top {
            grid-template-columns: 1fr !important;
          }
          .elnor-footer-links {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .elnor-footer-links {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
