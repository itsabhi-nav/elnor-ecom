"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered]     = useState(false);
  const [imgIdx, setImgIdx]       = useState(0);
  const { addToCart }             = useCart();
  const hoverTimer                = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (product.images.length > 1) {
      hoverTimer.current = setTimeout(() => setImgIdx(1), 120);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setImgIdx(0);
  };

  const currentImage = product.images[imgIdx] ?? product.images[0];

  return (
    <article
      className="elnor-product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--ink-08)",
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all var(--t-mid)",
        boxShadow: hovered ? "var(--e-3)" : "var(--e-1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
        height: "100%",
      }}
    >
      {/* Image Stage */}
      <Link
        href={`/products/${product.id}`}
        aria-label={`View ${product.shortName}`}
        style={{
          display: "block",
          position: "relative",
          background: "var(--surface-raised)",
          aspectRatio: "1.05",
          overflow: "hidden",
        }}
        tabIndex={-1}
      >
        <Image
          src={currentImage}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            objectFit: "contain",
            padding: "16px",
            mixBlendMode: "multiply",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Product designation — savings remain with the price below */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
          }}
        >
          {product.badge && <span className="badge badge-bronze">{product.badge}</span>}
        </div>
      </Link>

      {/* Content */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* Category + badge row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-40)",
              }}
            >
              {product.categoryLabel}
            </span>
          </div>

          {/* Title */}
          <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.18rem",
                fontWeight: 600,
                color: "var(--ink)",
                lineHeight: 1.25,
                letterSpacing: "0",
                marginBottom: "6px",
                transition: "color var(--t-fast)",
              }}
            >
              {product.shortName.replace("ELNOR ", "")}
            </h3>
          </Link>

          {/* Tagline */}
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--ink-60)",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              marginBottom: "12px",
            }}
          >
            {product.tagline}
          </p>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  fill={i < Math.round(product.rating) ? "#D4832A" : "transparent"}
                  color={i < Math.round(product.rating) ? "#D4832A" : "var(--ink-15)"}
                />
              ))}
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--ink-60)", fontWeight: 600 }}>
              {product.rating}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--ink-40)" }}>
              ({product.reviewsCount.toLocaleString()})
            </span>
          </div>
        </div>

        {/* Bottom area: Price + Action Bar */}
        <div style={{ borderTop: "1px solid var(--ink-08)", paddingTop: "14px", marginTop: "auto" }}>
          {/* Price Row */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--ink-40)",
                  textDecoration: "line-through",
                }}
              >
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--sage)",
                background: "var(--sage-soft)",
                padding: "2px 7px",
                borderRadius: "var(--r-pill)",
              }}
            >
              SAVE {product.discountPercentage}%
            </span>
          </div>

          {/* Action Row - Never collides with boundaries */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 42px",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <Link
              href={`/products/${product.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                height: "38px",
                borderRadius: "var(--r-pill)",
                background: hovered ? "var(--surface-raised)" : "var(--surface)",
                color: "var(--ink)",
                border: "1px solid var(--ink-15)",
                textDecoration: "none",
                fontSize: "0.8125rem",
                fontWeight: 600,
                transition: "all var(--t-fast)",
                letterSpacing: "-0.005em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = hovered ? "var(--surface-raised)" : "var(--surface)";
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--ink-15)";
              }}
            >
              <span>View Details</span>
              <ArrowUpRight size={13} />
            </Link>

            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, 1);
              }}
              aria-label={`Add ${product.shortName} to bag`}
              title="Add to bag"
              style={{
                height: "38px",
                width: "42px",
                borderRadius: "var(--r-pill)",
                background: "var(--ink)",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all var(--t-fast)",
                boxShadow: "0 2px 8px rgba(26,25,23,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.background = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "var(--ink)";
              }}
            >
              <ShoppingBag size={15} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
