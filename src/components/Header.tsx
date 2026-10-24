"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ExternalLink, ChevronRight, ShieldCheck, Star, Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV = [
  { href: "/products",  num: "01", label: "Store",           desc: "7 Precision Kinetic & Thermal Devices" },
  { href: "/ritual",    num: "02", label: "The Ritual",       desc: "15-Min Evening Neural Restoration" },
  { href: "/science",   num: "03", label: "Science",          desc: "Onsen Warmth & Shiatsu Kinematics" },
  { href: "/care",      num: "04", label: "Care & Guarantee", desc: "1-Yr Direct Replacement & Concierge" },
];

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 80,
          background: scrolled
            ? "rgba(250, 250, 248, 0.95)"
            : "rgba(250, 250, 248, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid var(--ink-08)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 4px 20px rgba(26,25,23,0.05)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70px",
          }}
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="ELNOR home"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.42rem",
                fontWeight: 800,
                letterSpacing: "0.22em",
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              ELNOR
            </span>
            <span
              className="elnor-logo-sub"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--bronze)",
                fontWeight: 500,
                borderLeft: "1px solid var(--ink-15)",
                paddingLeft: "10px",
                paddingBottom: "2px",
              }}
            >
              Wellness
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="elnor-desktop-nav"
          >
            {NAV.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: active ? 600 : 500,
                    color: active ? "var(--ink)" : "var(--ink-60)",
                    padding: "8px 14px",
                    borderRadius: "var(--r-pill)",
                    position: "relative",
                    transition: "all var(--t-fast)",
                    background: active ? "var(--surface-raised)" : "transparent",
                    letterSpacing: "-0.005em",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "var(--ink)";
                      e.currentTarget.style.background = "var(--surface-raised)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "var(--ink-60)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Amazon link - desktop only */}
            <a
              href="https://www.amazon.in/stores/Elnor/page/8A7B9C1D-ASIN"
              target="_blank"
              rel="noopener noreferrer"
              className="elnor-amazon-link btn btn-ghost btn-sm"
              style={{ gap: "6px" }}
            >
              <span>Amazon.in</span>
              <ExternalLink size={12} />
            </a>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open cart with ${totalItems} items`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                background: totalItems > 0 ? "var(--ink)" : "var(--surface)",
                color: totalItems > 0 ? "#FFFFFF" : "var(--ink)",
                border: `1.5px solid ${totalItems > 0 ? "var(--ink)" : "var(--ink-15)"}`,
                borderRadius: "var(--r-pill)",
                padding: "0 14px",
                height: "40px",
                cursor: "pointer",
                transition: "all var(--t-mid)",
                boxShadow: totalItems > 0 ? "0 2px 10px rgba(26,25,23,0.14)" : "none",
              }}
            >
              <ShoppingBag size={15} strokeWidth={totalItems > 0 ? 2.5 : 2} />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 650,
                  letterSpacing: "0.02em",
                }}
              >
                Bag
              </span>
              {totalItems > 0 && (
                <span
                  style={{
                    background: "var(--bronze)",
                    color: "#FFFFFF",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "2px",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              className="elnor-mobile-toggle"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                background: mobileOpen ? "var(--ink)" : "var(--surface)",
                border: "1.5px solid var(--ink-15)",
                borderRadius: "var(--r-md)",
                color: mobileOpen ? "#FFFFFF" : "var(--ink)",
                cursor: "pointer",
                transition: "all var(--t-fast)",
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── LUXURY FULL-SCREEN MOBILE OVERLAY MENU ── */}
        {mobileOpen && (
          <div
            className="elnor-mobile-drawer"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100dvh",
              zIndex: 999,
              background: "#FAF8F5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px 24px 32px",
              overflowY: "auto",
              animation: "elnorDrawerFadeIn 0.24s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Top Bar inside Drawer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--ink-08)",
              }}
            >
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    letterSpacing: "0.22em",
                    color: "var(--ink)",
                  }}
                >
                  ELNOR
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--bronze)",
                    fontWeight: 500,
                    borderLeft: "1px solid var(--ink-15)",
                    paddingLeft: "8px",
                  }}
                >
                  Wellness
                </span>
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--surface)",
                  border: "1px solid var(--ink-15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ink)",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Middle Nav Links */}
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                margin: "auto 0",
                padding: "24px 0",
              }}
            >
              {NAV.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px",
                      borderRadius: "var(--r-lg)",
                      textDecoration: "none",
                      background: active ? "var(--surface-raised)" : "transparent",
                      border: active ? "1px solid var(--ink-08)" : "1px solid transparent",
                      transition: "all var(--t-fast)",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            color: active ? "var(--bronze)" : "var(--ink-40)",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {link.num}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.65rem",
                            fontWeight: active ? 650 : 500,
                            color: "var(--ink)",
                            lineHeight: 1.15,
                          }}
                        >
                          {link.label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--ink-60)",
                          paddingLeft: "26px",
                        }}
                      >
                        {link.desc}
                      </span>
                    </div>

                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: active ? "var(--ink)" : "var(--surface)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: active ? "#FFFFFF" : "var(--ink-40)",
                        flexShrink: 0,
                      }}
                    >
                      <ChevronRight size={16} />
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Actions & Trust Footnote */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                borderTop: "1px solid var(--ink-08)",
                paddingTop: "18px",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="btn btn-primary"
                  style={{ justifyContent: "center", minHeight: "44px" }}
                >
                  <ShoppingBag size={15} />
                  <span>Ritual Bag ({totalItems})</span>
                </button>

                <a
                  href="https://www.amazon.in/stores/Elnor/page/8A7B9C1D-ASIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ justifyContent: "center", minHeight: "44px", background: "var(--surface)" }}
                >
                  <ExternalLink size={14} />
                  <span>Amazon India</span>
                </a>
              </div>

              {/* Verified Trust Statement */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.7rem",
                  color: "var(--ink-60)",
                  padding: "8px 4px 0",
                  fontWeight: 500,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <ShieldCheck size={12} color="var(--bronze)" />
                  <span>1-Yr Replacement</span>
                </div>
                <span>·</span>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Star size={11} fill="#D4832A" color="#D4832A" />
                  <span>4.8★ on Amazon</span>
                </div>
                <span>·</span>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Zap size={11} color="var(--sage-mid)" />
                  <span>50k+ Customers</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes elnorDrawerFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 860px) {
          .elnor-desktop-nav { display: flex !important; }
          .elnor-amazon-link { display: inline-flex !important; }
          .elnor-mobile-toggle { display: none !important; }
        }
        @media (max-width: 859px) {
          .elnor-desktop-nav { display: none !important; }
          .elnor-amazon-link { display: none !important; }
          .elnor-mobile-toggle { display: flex !important; }
        }
        @media (max-width: 380px) {
          .elnor-logo-sub { display: none !important; }
        }
      `}</style>
    </>
  );
}
