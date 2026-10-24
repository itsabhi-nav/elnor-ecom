"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Zap, ShoppingBag, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

const FEATURES = [
  {
    productIndex: 0, // Cervical 3D Neck Massager
    badge: "Best Seller",
    tagline: "Cervical 3D Neck Massager",
    highlight: "3D Shiatsu + Infrared Warmth",
    description: "Ergonomic deep-tissue kneading and soothing graphene warmth for the neck and shoulders.",
    specPill: "⚡ 3D Shiatsu · Graphene Heat · Cordless Comfort",
    color: "#8B5E2A",
  },
  {
    productIndex: 3, // Aura Smart Thermal Eye Massager
    badge: "Physio Recommended",
    tagline: "Aura Smart Thermal Eye Massager",
    highlight: "Aura Thermal Eye Care",
    description: "Multi-point rhythmic air compression and ambient Bluetooth soundscapes for profound neural decompression.",
    specPill: "⚡ Bluetooth Audio · Air Compression · Foldable Ergonomic",
    color: "#4A3565",
  },
  {
    productIndex: 2, // Dynamic Cupping Tool
    badge: "Top Value",
    tagline: "Smart Dynamic Cupping Tool",
    highlight: "12-Mode Micro-Vacuum",
    description: "12-mode micro-vacuum therapy with red-light thermal circulation for targeted myofascial release.",
    specPill: "⚡ 12 Modes · Red-Light Therapy · −600 mmHg Vacuum",
    color: "#1A3A5C",
  },
];

export default function Hero() {
  const [active, setActive]   = useState(0);
  const [animate, setAnimate] = useState(false);
  const { addToCart }         = useCart();
  const timerRef              = useRef<NodeJS.Timeout | null>(null);

  const current = FEATURES[active];
  const product = PRODUCTS[current.productIndex];

  const changeSlide = (idx: number) => {
    if (idx === active) return;
    setAnimate(true);
    setTimeout(() => {
      setActive(idx);
      setAnimate(false);
    }, 180);
  };

  const nextSlide = () => changeSlide((active + 1) % FEATURES.length);
  const prevSlide = () => changeSlide((active - 1 + FEATURES.length) % FEATURES.length);

  // Auto-rotate every 3s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % FEATURES.length);
    }, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section
      style={{
        paddingTop: "clamp(24px, 3.5vw, 44px)",
        paddingBottom: "clamp(28px, 4vw, 52px)",
        position: "relative",
        overflow: "hidden",
        background: "var(--canvas)",
      }}
    >
      {/* Subtle warm radial ambient lights */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 60% at 75% 35%, rgba(212, 178, 120, 0.14) 0%, transparent 65%), " +
            "radial-gradient(ellipse 50% 50% at 20% 70%, rgba(45, 74, 53, 0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div className="elnor-hero-grid">

          {/* ── LEFT COLUMN: Pure Editorial Content (NO TAB BUTTON CLUTTER) ── */}
          <div className="elnor-hero-text-col">

            {/* Overline */}
            <div className="eyebrow" style={{ marginBottom: "16px" }}>
              <span className="eyebrow-dot" />
              <span>Smart Kinetic Therapy · Eastern Wisdom</span>
            </div>

            {/* Hero Display Headline */}
            <h1
              className="headline-hero elnor-hero-title-web"
              style={{
                marginBottom: "18px",
                maxWidth: "650px",
                lineHeight: 1.1,
              }}
            >
              Your daily ritual{" "}
              <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>of quiet</em>
              {" "}restoration.
            </h1>

            {/* Subtext */}
            <p
              className="subheadline elnor-hero-desc-web"
              style={{
                maxWidth: "540px",
                marginBottom: "36px",
                fontSize: "clamp(0.98rem, 1.2vw, 1.12rem)",
                lineHeight: 1.65,
                color: "var(--ink-70)",
              }}
            >
              ELNOR synthesizes Japanese Onsen warmth and Shiatsu precision into 
              whisper quiet, cordless wellness devices designed for how you actually live.
            </p>

            {/* Desktop CTAs */}
            <div
              className="elnor-hero-ctas-desktop"
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "38px",
              }}
            >
              <Link href="/products" className="btn btn-primary" style={{ minHeight: "48px", padding: "0 24px" }}>
                <span>Explore All Devices</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/ritual" className="btn btn-ghost" style={{ minHeight: "48px", padding: "0 22px" }}>
                The 15-Min Ritual
              </Link>
            </div>

            {/* Desktop Trust Signals */}
            <div
              className="elnor-hero-trust-desktop"
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                paddingTop: "22px",
                borderTop: "1px solid var(--ink-08)",
              }}
            >
              {[
                { icon: <ShieldCheck size={16} color="var(--bronze)" />, text: "1-Year Direct Replacement" },
                { icon: <Star size={14} className="star-fill" fill="#D4832A" color="#D4832A" />, text: "4.8★ on Amazon India" },
                { icon: <Zap size={15} color="var(--sage-mid)" />, text: "50,000+ Happy Customers" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    fontSize: "0.82rem",
                    color: "var(--ink-70)",
                    fontWeight: 500,
                  }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Free-Floating Showcase with Subtle Arrow Controls ── */}
          <div className="elnor-hero-showcase-col">
            <div
              style={{
                width: "100%",
                maxWidth: "460px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Product Visual Stage: Free-Floating with Ambient Halo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(260px, 24vw, 320px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(212, 178, 120, 0.22) 0%, rgba(247, 245, 240, 0.4) 55%, transparent 75%)",
                }}
              >
                {/* Floating Restorative Pill (Top Left) */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 2,
                    background: "rgba(255, 255, 255, 0.88)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid var(--ink-08)",
                    borderRadius: "var(--r-pill)",
                    padding: "5px 12px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    boxShadow: "var(--e-1)",
                  }}
                >
                  <span className="badge badge-bronze" style={{ padding: "2px 6px", fontSize: "0.68rem" }}>
                    {current.badge}
                  </span>
                  <span className="elnor-hero-pill-highlight">{current.highlight}</span>
                </div>

                {/* Floating Rating Pill (Top Right) */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    zIndex: 2,
                    background: "rgba(255, 255, 255, 0.88)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid var(--ink-08)",
                    borderRadius: "var(--r-pill)",
                    padding: "5px 12px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: "var(--e-1)",
                  }}
                >
                  <Star size={12} fill="#D4832A" color="#D4832A" />
                  <span>{product.rating}</span>
                  <span style={{ color: "var(--ink-40)", fontWeight: 400 }}>
                    ({product.reviewsCount.toLocaleString()})
                  </span>
                </div>

                {/* Previous Slide Arrow */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous device"
                  style={{
                    position: "absolute",
                    left: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 3,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid var(--ink-08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ink)",
                    cursor: "pointer",
                    boxShadow: "var(--e-1)",
                    transition: "all var(--t-fast)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#FFFFFF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)"; }}
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Next Slide Arrow */}
                <button
                  onClick={nextSlide}
                  aria-label="Next device"
                  style={{
                    position: "absolute",
                    right: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 3,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid var(--ink-08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ink)",
                    cursor: "pointer",
                    boxShadow: "var(--e-1)",
                    transition: "all var(--t-fast)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#FFFFFF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)"; }}
                >
                  <ChevronRight size={16} />
                </button>

                {/* Main Product Visual */}
                <Link
                  href={`/products/${product.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    cursor: "pointer",
                    padding: "12px",
                  }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.shortName}
                    width={500}
                    height={380}
                    priority
                    style={{
                      objectFit: "contain",
                      maxHeight: "92%",
                      maxWidth: "92%",
                      width: "auto",
                      height: "auto",
                      mixBlendMode: "multiply",
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease",
                      opacity: animate ? 0 : 1,
                      transform: animate ? "scale(0.95)" : "scale(1)",
                    }}
                  />
                </Link>

                {/* Floating Spec Bar (Bottom Center) */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    background: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid var(--ink-08)",
                    borderRadius: "var(--r-pill)",
                    padding: "5px 14px",
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink-60)",
                    whiteSpace: "nowrap",
                    boxShadow: "var(--e-1)",
                  }}
                >
                  {current.specPill}
                </div>
              </div>

              {/* Integrated Product Headline & Actions (Clean, Open, No Box) */}
              <div
                style={{
                  padding: "16px 8px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h3
                      className="elnor-hero-product-name"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                        fontWeight: 600,
                        color: "var(--ink)",
                        lineHeight: 1.2,
                        marginBottom: "4px",
                        minHeight: "38px",
                        display: "flex",
                        alignItems: "center",
                        opacity: animate ? 0 : 1,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {product.shortName}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--ink-60)",
                        lineHeight: 1.5,
                        maxWidth: "360px",
                        minHeight: "44px",
                        opacity: animate ? 0 : 1,
                        transition: "all 0.2s ease",
                      }}
                    >
                      {current.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "6px",
                        justifyContent: "flex-end",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.55rem",
                          fontWeight: 800,
                          color: "var(--ink)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--ink-40)",
                          textDecoration: "line-through",
                        }}
                      >
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "var(--sage)",
                        background: "var(--sage-soft)",
                        padding: "2px 7px",
                        borderRadius: "var(--r-pill)",
                        marginTop: "4px",
                      }}
                    >
                      {product.discountPercentage}% OFF
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons: Bag + Details */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 1fr",
                    gap: "10px",
                    paddingTop: "6px",
                  }}
                >
                  <button
                    onClick={() => addToCart(product, 1)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      height: "44px",
                      borderRadius: "var(--r-pill)",
                      background: "var(--ink)",
                      color: "#FFFFFF",
                      border: "none",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all var(--t-fast)",
                      boxShadow: "0 2px 10px rgba(26,25,23,0.14)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#000000"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink)"; }}
                  >
                    <ShoppingBag size={15} />
                    <span>Add to Bag — ₹{product.price.toLocaleString("en-IN")}</span>
                  </button>

                  <Link
                    href={`/products/${product.id}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      height: "44px",
                      borderRadius: "var(--r-pill)",
                      background: "var(--surface)",
                      color: "var(--ink)",
                      border: "1px solid var(--ink-15)",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all var(--t-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--surface-raised)";
                      e.currentTarget.style.borderColor = "var(--ink-40)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--surface)";
                      e.currentTarget.style.borderColor = "var(--ink-15)";
                    }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Minimalist Progress Indicators */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px",
                    paddingTop: "8px",
                  }}
                >
                  {FEATURES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => changeSlide(i)}
                      aria-label={`View product ${i + 1}`}
                      style={{
                        width: i === active ? "24px" : "8px",
                        height: "4px",
                        borderRadius: "4px",
                        background: i === active ? "var(--ink)" : "var(--ink-15)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "all var(--t-mid)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE ACTIONS: Exactly 1 single line for trust signals ── */}
          <div className="elnor-hero-mobile-actions">
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                width: "100%",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              <Link
                href="/products"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", minHeight: "46px" }}
              >
                <span>Explore All Devices</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/ritual"
                className="btn btn-ghost"
                style={{ width: "100%", justifyContent: "center", minHeight: "46px" }}
              >
                The 15-Min Ritual
              </Link>
            </div>

            {/* Exactly One Single Line on Mobile with user's exact required copy */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                paddingTop: "14px",
                borderTop: "1px solid var(--ink-08)",
                fontSize: "clamp(0.68rem, 2.3vw, 0.78rem)",
                color: "var(--ink-60)",
                whiteSpace: "nowrap",
                overflowX: "auto",
                scrollbarWidth: "none",
                fontWeight: 500,
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                <ShieldCheck size={13} color="var(--bronze)" />
                <span>1-Year Direct Replacement</span>
              </div>
              <span style={{ color: "var(--ink-20)", flexShrink: 0 }}>·</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                <Star size={11} fill="#D4832A" color="#D4832A" />
                <span>4.8★ on Amazon India</span>
              </div>
              <span style={{ color: "var(--ink-20)", flexShrink: 0 }}>·</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                <Zap size={12} color="var(--sage-mid)" />
                <span>50,000+ Happy Customers</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .elnor-hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.82fr;
          gap: 52px;
          align-items: start;
        }

        .elnor-hero-text-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 10px;
        }

        @media (min-width: 961px) {
          .elnor-hero-title-web {
            font-size: clamp(2.9rem, 4.3vw, 4.3rem) !important;
          }
        }

        .elnor-hero-showcase-col {
          display: flex;
          justifyContent: center;
          align-items: flex-start;
        }

        .elnor-hero-mobile-actions {
          display: none;
        }

        /* Responsive Mobile Behavior: Headline -> Free-floating Photo -> CTAs -> 1-Line Trust */
        @media (max-width: 960px) {
          .elnor-hero-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .elnor-hero-ctas-desktop,
          .elnor-hero-trust-desktop {
            display: none !important;
          }

          .elnor-hero-text-col {
            order: 1;
            width: 100%;
          }

          .elnor-hero-showcase-col {
            order: 2;
            width: 100%;
          }

          .elnor-hero-mobile-actions {
            order: 3;
            display: block !important;
            width: 100%;
          }

          .elnor-hero-pill-highlight {
            display: none !important;
          }

          .elnor-hero-product-name {
            font-size: clamp(1rem, 4.25vw, 1.3rem) !important;
            letter-spacing: -0.035em !important;
            white-space: nowrap;
          }
        }
      `}</style>
    </section>
  );
}
