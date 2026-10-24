"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import RitualVisualizer from "@/components/RitualVisualizer";
import ProductCatalog from "@/components/ProductCatalog";
import OriginsAndScience from "@/components/OriginsAndScience";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import { useCart } from "@/context/CartContext";
import { Check } from "lucide-react";

export default function HomePage() {
  const { notification } = useCart();

  return (
    <>
      {/* Toast Notification */}
      {notification && (
        <div className="toast">
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "var(--sage-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Check size={14} color="var(--sage)" strokeWidth={2.5} />
          </div>
          <span>{notification}</span>
        </div>
      )}

      {/* Hero */}
      <Hero />

      {/* The 15-Min Ritual — signature interactive section */}
      <RitualVisualizer />

      {/* Product Catalog */}
      <ProductCatalog />

      {/* Origins & Science */}
      <OriginsAndScience />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Testimonials + Stats */}
      <Testimonials />

      {/* Full-width CTA Banner */}
      <section
        style={{
          background: "var(--ink)",
          paddingBlock: "clamp(64px, 9vw, 112px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative warm glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(139, 94, 42, 0.18) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div
            className="t-label"
            style={{
              justifyContent: "center",
              marginBottom: "20px",
              color: "var(--bronze-mid)",
            }}
          >
            Begin Today
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
              maxWidth: "640px",
              marginInline: "auto",
            }}
          >
            Your restoration ritual{" "}
            <em style={{ fontStyle: "italic", color: "var(--bronze-mid)" }}>
              starts now.
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "40px",
              maxWidth: "480px",
              marginInline: "auto",
              lineHeight: 1.65,
            }}
          >
            Seven precision devices. One daily ritual. Delivered to your door, 
            backed by a 1-year direct replacement warranty.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 32px",
                height: "52px",
                borderRadius: "var(--r-pill)",
                background: "#FFFFFF",
                color: "var(--ink)",
                fontWeight: 700,
                fontSize: "0.9375rem",
                textDecoration: "none",
                transition: "all var(--t-mid)",
                letterSpacing: "-0.01em",
              }}
            >
              Shop All Devices
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amazon"
              style={{ height: "52px" }}
            >
              Shop on Amazon India
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />
    </>
  );
}
