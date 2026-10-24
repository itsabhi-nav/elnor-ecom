"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowLeft, ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { Check } from "lucide-react";

const CATEGORIES = [
  { id: "all",           label: "All Devices",      emoji: "✦" },
  { id: "head-scalp",    label: "Head & Scalp",     emoji: "🧠" },
  { id: "neck-shoulder", label: "Neck & Shoulders", emoji: "🫧" },
  { id: "back-abdomen",  label: "Back & Abdomen",   emoji: "🌡" },
  { id: "joints-limbs",  label: "Joints & Body",    emoji: "💪" },
];

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export default function ProductsPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery]       = useState("");
  const [sort, setSort]         = useState<SortOption>("featured");
  const { notification }        = useCart();

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      const matchesCat = category === "all" || p.category === category;
      const q = query.toLowerCase();
      const matchesQ =
        !q ||
        p.shortName.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
    if (sort === "price-asc")  list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating")     list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, query, sort]);

  return (
    <>
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

      {/* Page Header */}
      <div
        style={{
          background: "var(--surface-raised)",
          borderBottom: "1px solid var(--ink-08)",
          paddingBlock: "clamp(48px, 7vw, 80px)",
        }}
      >
        <div className="container">
          {/* Breadcrumb Navigation Row */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                color: "var(--ink-60)",
                textDecoration: "none",
                fontWeight: 500,
                padding: "4px 10px",
                borderRadius: "var(--r-pill)",
                background: "var(--surface)",
                border: "1px solid var(--ink-08)",
                transition: "all var(--t-fast)",
              }}
            >
              <ArrowLeft size={13} />
              <span>Back to Home</span>
            </Link>
            <span style={{ color: "var(--ink-20)", fontSize: "0.85rem" }}>/</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--bronze)",
                fontWeight: 600,
              }}
            >
              Official Collection
            </span>
          </div>

          <h1 className="t-display-lg" style={{ maxWidth: "560px" }}>
            The ELNOR{" "}
            <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>Range.</em>
          </h1>
          <p className="t-body-lg" style={{ maxWidth: "520px", marginTop: "16px" }}>
            Seven precision wellness devices engineered for targeted restoration, 
            deep cervical alignment, and daily neural calm.
          </p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div
        style={{
          background: "var(--canvas)",
          borderBottom: "1px solid var(--ink-08)",
          position: "sticky",
          top: "72px",
          zIndex: 30,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "12px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {/* Category pills */}
          <div className="products-cat-scroll" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {CATEGORIES.map((cat) => {
              const active = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: active ? "var(--ink)" : "var(--surface)",
                    color: active ? "#FFFFFF" : "var(--ink-60)",
                    border: `1.5px solid ${active ? "var(--ink)" : "var(--ink-08)"}`,
                    borderRadius: "var(--r-pill)",
                    padding: "6px 14px",
                    fontSize: "0.8125rem",
                    fontWeight: active ? 700 : 500,
                    cursor: "pointer",
                    transition: "all var(--t-fast)",
                    letterSpacing: "-0.005em",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search + Sort */}
          <div className="products-search-sort" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ position: "relative", flex: 1 }}>
              <Search
                size={13}
                style={{
                  position: "absolute",
                  left: "11px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--ink-40)",
                  pointerEvents: "none",
                }}
              />
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: "100%",
                  minWidth: "120px",
                  background: "var(--surface)",
                  border: "1.5px solid var(--ink-08)",
                  borderRadius: "var(--r-pill)",
                  padding: "7px 14px 7px 30px",
                  fontSize: "0.8125rem",
                  color: "var(--ink)",
                  outline: "none",
                  fontFamily: "var(--font-body)",
                  transition: "border-color var(--t-fast)",
                }}
                className="products-search-input"
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--bronze)"; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--ink-08)"; }}
              />
            </div>

            {/* Custom styled select with perfectly placed inside arrow */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                style={{
                  background: "var(--surface)",
                  border: "1.5px solid var(--ink-08)",
                  borderRadius: "var(--r-pill)",
                  padding: "7px 30px 7px 12px",
                  fontSize: "0.8125rem",
                  color: "var(--ink)",
                  outline: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                <option value="featured">Featured</option>
                <option value="rating">Top Rated</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
              <ChevronDown
                size={13}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "var(--ink-60)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .products-cat-scroll {
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 2px;
            width: 100%;
          }
          .products-search-sort {
            width: 100% !important;
          }
          .products-search-input {
            width: 100% !important;
          }
        }
      `}</style>

      {/* Product Grid */}
      <div
        className="section"
        style={{ background: "var(--canvas)" }}
      >
        <div className="container">
          {/* Results count */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--ink-60)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              {filtered.length} device{filtered.length !== 1 ? "s" : ""}
              {category !== "all" ? ` in ${CATEGORIES.find((c) => c.id === category)?.label}` : ""}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "100px 20px",
                color: "var(--ink-40)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--ink-60)",
                  marginBottom: "12px",
                }}
              >
                No devices found
              </div>
              <button
                onClick={() => { setCategory("all"); setQuery(""); }}
                className="btn btn-ghost btn-sm"
                style={{ marginTop: "16px" }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                gap: "24px",
              }}
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .products-cat-scroll {
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            padding-bottom: 4px;
          }
          .products-search-sort {
            width: 100% !important;
            margin-top: 4px !important;
          }
        }
      `}</style>
    </>
  );
}
