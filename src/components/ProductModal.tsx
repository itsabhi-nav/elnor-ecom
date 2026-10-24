"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Star, ShoppingBag, ShieldCheck, Truck, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedImgIndex(0);
    setQuantity(1);
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(12px)",
      }}
      onClick={() => setSelectedProduct(null)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "880px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0A0A0C",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "var(--radius-lg)",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
          padding: "36px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            cursor: "pointer",
            transition: "all 0.15s ease",
            zIndex: 10,
          }}
        >
          <X size={18} />
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "36px",
            alignItems: "start",
          }}
          className="modal-grid"
        >
          {/* Left Column: Image Gallery */}
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                marginBottom: "14px",
              }}
            >
              <Image
                src={selectedProduct.images[selectedImgIndex] || selectedProduct.images[0]}
                alt={selectedProduct.name}
                width={440}
                height={440}
                style={{
                  objectFit: "contain",
                  maxHeight: "92%",
                  maxWidth: "92%",
                  filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.7))",
                }}
              />
            </div>

            {/* Thumbnails */}
            <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
              {selectedProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  aria-label={`View ${selectedProduct.shortName}, image ${idx + 1}`}
                  style={{
                    position: "relative",
                    width: "64px",
                    height: "64px",
                    borderRadius: "var(--radius-sm)",
                    background: "#0A0A0C",
                    border:
                      selectedImgIndex === idx
                        ? "2px solid #FFFFFF"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    overflow: "hidden",
                    flexShrink: 0,
                    padding: "4px",
                  }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </button>
              ))}
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: "#FFFFFF", display: "block", marginBottom: "4px" }}>
                Ritual Guidance:
              </strong>
              {selectedProduct.ritualTip}
            </div>
          </div>

          {/* Right Column: Details & Specs */}
          <div>
            <div className="eyebrow">{selectedProduct.categoryLabel}</div>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.3,
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              {selectedProduct.name}
            </h2>

            {/* Rating */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", gap: "2px", color: "#FFAA22" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFAA22" />
                ))}
              </div>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#FFFFFF" }}>
                {selectedProduct.rating}
              </span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                ({selectedProduct.reviewsCount} Amazon India verified reviews)
              </span>
            </div>

            {/* Price Box */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "12px",
                padding: "16px 20px",
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#FFFFFF" }}>
                ₹{selectedProduct.price.toLocaleString("en-IN")}
              </span>
              <span style={{ fontSize: "1rem", color: "var(--text-muted)", textDecoration: "line-through" }}>
                ₹{selectedProduct.originalPrice.toLocaleString("en-IN")}
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent-green)",
                  fontWeight: 700,
                  background: "rgba(48, 209, 88, 0.12)",
                  padding: "3px 8px",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Save {selectedProduct.discountPercentage}%
              </span>
            </div>

            {/* Key Clinical Benefits */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "10px" }}>
                Key Benefits:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {(selectedProduct.bullets || []).slice(0, 4).map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.45,
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: "#FFFFFF", flexShrink: 0, marginTop: "3px" }}
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Preview */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "8px" }}>
                Specifications:
              </div>
              <div
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "var(--radius-sm)",
                  overflow: "hidden",
                }}
              >
                {selectedProduct.specs.slice(0, 4).map((spec, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "130px 1fr",
                      padding: "8px 12px",
                      fontSize: "0.82rem",
                      borderBottom:
                        idx < 3 ? "1px solid rgba(255, 255, 255, 0.04)" : "none",
                    }}
                  >
                    <span style={{ color: "var(--text-secondary)" }}>{spec.label}</span>
                    <span style={{ color: "#FFFFFF", fontWeight: 500 }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "var(--radius-pill)",
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={{ background: "transparent", border: "none", color: "#FFFFFF", padding: "10px 16px", cursor: "pointer" }}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: 600, minWidth: "20px", textAlign: "center" }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    style={{ background: "transparent", border: "none", color: "#FFFFFF", padding: "10px 16px", cursor: "pointer" }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(selectedProduct, quantity);
                    setSelectedProduct(null);
                  }}
                  className="btn-apple"
                  style={{ flex: 1, padding: "12px 20px" }}
                >
                  <ShoppingBag size={16} />
                  <span>
                    Add to Bag · ₹{(selectedProduct.price * quantity).toLocaleString("en-IN")}
                  </span>
                </button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <Link
                  href={`/products/${selectedProduct.id}`}
                  onClick={() => setSelectedProduct(null)}
                  className="btn-apple-secondary"
                  style={{ padding: "10px", textAlign: "center" }}
                >
                  <span>Full Device Page</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href={selectedProduct.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amazon-clean"
                  style={{ padding: "10px", justifyContent: "center" }}
                >
                  <span>Amazon India</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 820px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
