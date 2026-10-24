"use client";

import React, { useState, use, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Package,
  BookOpen,
  Cable,
  Droplet,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goNext = () => setActiveImageIndex((i) => (i + 1) % (product?.images.length ?? 1));
  const goPrev = () => setActiveImageIndex((i) => (i - 1 + (product?.images.length ?? 1)) % (product?.images.length ?? 1));
  const { addToCart } = useCart();

  const getBoxIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("cable") || t.includes("usb") || t.includes("charger")) return Cable;
    if (t.includes("oil") || t.includes("liquid") || t.includes("bottle") || t.includes("gua sha")) return Droplet;
    if (t.includes("filter") || t.includes("cotton") || t.includes("plug")) return Sparkles;
    if (t.includes("guide") || t.includes("manual") || t.includes("card") || t.includes("book")) return BookOpen;
    return Package;
  };

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div style={{ paddingTop: "clamp(20px, 3vw, 36px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.84rem",
            color: "var(--text-secondary)",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            Home
          </Link>
          <ChevronRight size={14} color="var(--text-muted)" />
          <Link
            href="/products"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            Store
          </Link>
          <ChevronRight size={14} color="var(--text-muted)" />
          <span style={{ color: "var(--text-ink)", fontWeight: 600 }}>{product.shortName}</span>
        </nav>

        {/* Hero Section: Gallery & Purchase Details */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "start",
            marginBottom: "64px",
          }}
          className="pdp-hero-grid"
        >
          {/* Left: Gallery Stage */}
          <div style={{ minWidth: 0 }}>
            {/* Image card with arrows inside */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                background: "var(--bg-stone-light)",
                border: "1px solid var(--line-hairline)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(14px, 4vw, 40px) clamp(24px, 7vw, 56px)",
                marginBottom: "12px",
              }}
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const diff = touchStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
                touchStartX.current = null;
              }}
            >
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                width={400}
                height={400}
                sizes="(max-width: 960px) 88vw, 560px"
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "100%",
                  height: "100%",
                  mixBlendMode: "multiply",
                  transition: "opacity 0.25s ease",
                  display: "block",
                  zIndex: 1,
                }}
                priority
              />
              {/* Arrows + dots — rendered after image so they layer above it */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    aria-label="Previous image"
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "rgba(26,25,23,0.65)",
                      backdropFilter: "blur(8px)",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      color: "#FFFFFF",
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next image"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "rgba(26,25,23,0.65)",
                      backdropFilter: "blur(8px)",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      color: "#FFFFFF",
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                  {/* Dot indicators */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "5px",
                      zIndex: 10,
                    }}
                  >
                    {product.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        style={{
                          width: i === activeImageIndex ? "18px" : "6px",
                          height: "4px",
                          borderRadius: "4px",
                          background: i === activeImageIndex ? "var(--text-ink)" : "rgba(0,0,0,0.25)",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          transition: "all 0.2s ease",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Carousel */}
            <div
              className="pdp-thumbs"
              style={{
                display: "flex",
                gap: "8px",
                overflowX: "auto",
                paddingBottom: "4px",
                scrollbarWidth: "none",
              }}
            >
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`View ${product.shortName}, image ${idx + 1}`}
                  style={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-stone-light)",
                    border:
                      activeImageIndex === idx
                        ? "2px solid var(--text-ink)"
                        : "1px solid var(--line-hairline)",
                    overflow: "hidden",
                    cursor: "pointer",
                    flexShrink: 0,
                    padding: "3px",
                    transition: "all 0.15s ease",
                  }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    style={{ objectFit: "contain", padding: "3px", mixBlendMode: "multiply" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Purchase Console */}
          <div className="pdp-purchase-console" style={{ minWidth: 0 }}>
            {/* Product badge */}
            <div
              className="pdp-badge-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              {product.badge && (
                <span className="pill-badge-bronze">{product.badge}</span>
              )}
            </div>

            {/* Title */}
            <h1
              className="pdp-product-title"
              style={{
                fontSize: "clamp(1.35rem, 4.2vw, 2.3rem)",
                fontWeight: 700,
                color: "var(--text-ink)",
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
                marginBottom: "8px",
                fontFamily: "var(--font-sans)",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              {product.shortName}
            </h1>

            <div className="pdp-asin">ASIN: {product.asin}</div>

            {/* Tagline */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--accent-bronze)",
                fontWeight: 600,
                lineHeight: 1.5,
                marginBottom: "10px",
              }}
            >
              {product.tagline}
            </p>

            {/* Official Amazon Listing Description */}
            <p
              style={{
                fontSize: "0.84rem",
                color: "var(--text-secondary)",
                lineHeight: 1.55,
                marginBottom: "20px",
              }}
            >
              {product.name}
            </p>

            {/* Rating Stars & Count */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingBottom: "20px",
                borderBottom: "1px solid var(--line-hairline)",
                marginBottom: "24px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "2px", color: "#D9822B" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#D9822B" color="#D9822B" />
                ))}
              </div>
              <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-ink)" }}>
                {product.rating}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                ({product.reviewsCount.toLocaleString()} verified Amazon India ratings)
              </span>
            </div>

            {/* Price & Savings Block */}
            <div
              className="stone-card pdp-price-block"
              style={{
                padding: "20px 24px",
                marginBottom: "28px",
                background: "var(--bg-surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  marginBottom: "6px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    color: "var(--text-ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-muted)",
                    textDecoration: "line-through",
                  }}
                >
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="pill-badge-sage">
                  Save {product.discountPercentage}%
                </span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                Inclusive of all taxes. Free Express Air Delivery included.
              </p>
            </div>

            {/* Key Clinical Benefits */}
            <div className="pdp-benefits-block" style={{ marginBottom: "28px" }}>
              <h4
                style={{
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-bronze)",
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                Engineered Benefits
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {product.bullets.slice(0, 4).map((bullet, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.92rem",
                      color: "var(--text-body)",
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{ color: "var(--accent-sage)", flexShrink: 0, marginTop: "3px" }}
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Buttons */}
            <div
              className="pdp-actions-block"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                paddingTop: "20px",
                borderTop: "1px solid var(--line-hairline)",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }} className="pdp-actions-row">
                {/* Stepper */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    border: "1px solid var(--line-medium)",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--bg-stone-light)",
                  }}
                >
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-ink)",
                      padding: "10px 16px",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                    }}
                  >
                    -
                  </button>
                  <span
                    style={{
                      fontWeight: 700,
                      minWidth: "24px",
                      textAlign: "center",
                      color: "var(--text-ink)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-ink)",
                      padding: "10px 16px",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Bag */}
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="btn-primary-ink"
                  style={{ flex: 1, padding: "14px 24px", fontSize: "0.95rem" }}
                >
                  <ShoppingBag size={17} />
                  <span>
                    Add to Bag · ₹{(product.price * quantity).toLocaleString("en-IN")}
                  </span>
                </button>
              </div>

              {/* Direct Amazon Buy Button */}
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amazon-pill"
                style={{ padding: "12px 16px", width: "100%", justifyContent: "center", gap: "8px" }}
              >
                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>
                  Buy on Amazon.in
                  <span className="amazon-prime-label"> · Prime 1-Day</span>
                </span>
                <ExternalLink size={14} style={{ flexShrink: 0 }} />
              </a>
            </div>

            {/* Service & Guarantee Badges */}
            <div
              className="pdp-service-badges"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginTop: "24px",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={18} color="var(--accent-bronze)" />
                <span style={{ color: "var(--text-body)" }}>1-Year Official Replacement</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Truck size={18} color="var(--accent-sage)" />
                <span style={{ color: "var(--text-body)" }}>Express Air Delivery Across India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Official Amazon A+ Graphic Content Banners */}
        {product.aplusImages && product.aplusImages.length > 0 && (
          <section style={{ marginBottom: "72px" }}>
            <div style={{ marginBottom: "24px" }}>
              <div className="eyebrow">Visual Engineering</div>
              <h2 className="headline-section" style={{ fontSize: "2rem" }}>
                Designed in Detail.
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {product.aplusImages.map((bannerUrl, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: "1px solid var(--line-hairline)",
                    boxShadow: "var(--shadow-card)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <Image
                    src={bannerUrl}
                    alt={`${product.shortName} Feature Banner ${idx + 1}`}
                    width={1200}
                    height={680}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Architecture & Specifications */}
        <section
          className="stone-card"
          style={{
            padding: "clamp(24px, 4vw, 40px)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "56px",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "28px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div className="eyebrow">Technical Architecture</div>
              <h2 className="headline-section" style={{ fontSize: "1.9rem" }}>
                Precision Specifications
              </h2>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--text-secondary)",
                background: "var(--bg-stone)",
                padding: "4px 12px",
                borderRadius: "var(--radius-pill)",
              }}
            >
              {product.specs.length} Verified Attributes
            </span>
          </div>

          {/* Curated Key Highlights Grid (Top 6 specs shown as clean cards) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: "14px",
              marginBottom: "24px",
            }}
          >
            {product.specs.slice(0, 6).map((spec, idx) => (
              <div
                key={idx}
                style={{
                  padding: "16px",
                  background: "var(--bg-stone-light)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--line-hairline)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--accent-bronze)",
                    fontWeight: 600,
                  }}
                >
                  {spec.label}
                </span>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 650,
                    color: "var(--text-ink)",
                    lineHeight: 1.35,
                    wordBreak: "break-word",
                  }}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Expandable Complete Spec List */}
          {showAllSpecs && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px 40px",
                padding: "24px",
                background: "var(--bg-stone-light)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line-hairline)",
                marginBottom: "20px",
              }}
              className="specs-grid"
            >
              {product.specs.slice(6).map((spec, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    borderBottom: "1px solid var(--line-hairline)",
                    fontSize: "0.85rem",
                    gap: "12px",
                  }}
                >
                  <span style={{ color: "var(--text-secondary)", flexShrink: 0, maxWidth: "45%" }}>
                    {spec.label}
                  </span>
                  <span style={{ color: "var(--text-ink)", fontWeight: 600, textAlign: "right", wordBreak: "break-word" }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Toggle Button */}
          {product.specs.length > 6 && (
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => setShowAllSpecs(!showAllSpecs)}
                className="btn-secondary-stone"
                style={{
                  padding: "10px 22px",
                  fontSize: "0.82rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <span>
                  {showAllSpecs
                    ? "Collapse Technical Details"
                    : `View All ${product.specs.length} Complete Specifications`}
                </span>
                {showAllSpecs ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
            </div>
          )}
        </section>

        {/* Unboxing Experience */}
        <section
          className="pebble-card"
          style={{
            padding: "clamp(24px, 4vw, 36px)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "72px",
            background: "var(--bg-stone)",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <div className="eyebrow">Unboxing Experience</div>
            <h3 className="headline-card" style={{ fontSize: "1.5rem" }}>
              What is Included in the Box
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              Every package arrives in tamper-evident clinical packaging with all essential accessories.
            </p>
          </div>

          <div
            className="unboxing-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: "12px",
            }}
          >
            {product.boxContents.map((item, idx) => {
              const ItemIcon = getBoxIcon(item);
              return (
                <div
                  key={idx}
                  style={{
                    padding: "18px 16px",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--line-hairline)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    boxShadow: "var(--shadow-subtle)",
                    transition: "all var(--t-fast)",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--accent-bronze-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-bronze)",
                      flexShrink: 0,
                    }}
                  >
                    <ItemIcon size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-bronze)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Item 0{idx + 1}
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "var(--text-ink)",
                        marginTop: "2px",
                        lineHeight: 1.35,
                      }}
                    >
                      {item}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Devices */}
        <section>
          <div
            className="pdp-related-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "32px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div className="eyebrow">Complete The Ecosystem</div>
              <h2 className="headline-section" style={{ fontSize: "1.8rem" }}>
                Complementary Devices
              </h2>
            </div>
            <Link
              href="/products"
              className="pdp-view-all-devices"
              style={{
                color: "var(--text-ink)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "var(--radius-pill)",
                background: "var(--bg-stone)",
                border: "1px solid var(--line-hairline)",
              }}
            >
              <span>View All Devices</span>
              <ArrowRight size={15} color="var(--accent-bronze)" />
            </Link>
          </div>

          <div
            className="pdp-related-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
              gap: "20px",
            }}
          >
            {otherProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .pdp-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .pdp-hero-grid > div:first-child {
            max-width: 560px;
            margin-inline: auto;
            width: 100%;
          }
          .pdp-hero-grid > div:last-child {
            max-width: 560px;
            margin-inline: auto;
            width: 100%;
          }
        }
        @media (max-width: 700px) {
          .specs-grid {
            grid-template-columns: 1fr !important;
          }
          .pdp-related-header {
            flex-direction: column;
            align-items: stretch !important;
          }
        }
        @media (max-width: 700px) {
          .pdp-service-badges {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .pdp-thumbs {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
          }
          .pdp-product-title {
            font-size: clamp(1.02rem, 4.15vw, 1.25rem) !important;
            letter-spacing: -0.04em !important;
            white-space: nowrap;
          }
          .pdp-view-all-devices {
            width: 100%;
            min-height: 50px;
            justify-content: center;
            font-size: 0.94rem !important;
            background: var(--text-ink) !important;
            color: #fff !important;
            border-color: var(--text-ink) !important;
          }
        }
        @media (max-width: 540px) {
          .pdp-actions-row {
            flex-direction: column !important;
          }
          .pdp-actions-row > div {
            width: 100% !important;
            justify-content: space-between !important;
            padding-inline: 8px !important;
          }
          .pdp-actions-row > button {
            width: 100% !important;
          }
        }
        @media (max-width: 380px) {
          .amazon-prime-label {
            display: none;
          }
        }

        .pdp-purchase-console {
          display: flex;
          flex-direction: column;
        }
        .pdp-price-block { order: 1; }
        .pdp-actions-block { order: 2; }
        .pdp-benefits-block {
          order: 3;
          margin-top: 34px;
          padding-top: 26px;
          border-top: 1px solid var(--line-hairline);
        }
        .pdp-service-badges { order: 4; }
        .pdp-asin {
          font-family: var(--font-mono);
          font-size: .7rem;
          letter-spacing: .08em;
          color: var(--text-muted);
          text-transform: uppercase;
          margin: -2px 0 12px;
        }
      `}</style>
    </div>
  );
}
