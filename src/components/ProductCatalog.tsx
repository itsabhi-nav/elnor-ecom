"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, ArrowRight, Layers } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = [
  { id: "all",            label: "All Devices",     count: 7 },
  { id: "head-scalp",     label: "Head & Scalp",    count: 2 },
  { id: "neck-shoulder",  label: "Neck & Shoulders", count: 1 },
  { id: "back-abdomen",   label: "Back & Abdomen",  count: 2 },
  { id: "joints-limbs",   label: "Joints & Body",   count: 2 },
];

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export default function ProductCatalog() {
  const [category, setCategory]     = useState("all");
  const [query, setQuery]           = useState("");
  const [sort, setSort]             = useState<SortOption>("featured");
  const [revealed, setRevealed]     = useState(false);
  const sectionRef                  = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

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

  // Show 6 flagship devices on the homepage so rows stay balanced (2 rows of 3)
  const displayed = useMemo(() => {
    if (category === "all" && !query) {
      return filtered.slice(0, 6);
    }
    return filtered;
  }, [category, query, filtered]);

  return (
    <section
      ref={sectionRef}
      id="collection"
      className="section"
      style={{ background: "var(--surface-raised)" }}
    >
      <div className="container">

        {/* Section Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            gap: "20px",
            marginBottom: "32px",
          }}
          className="elnor-catalog-header"
        >
          <div
            className={`reveal ${revealed ? "is-visible" : ""}`}
            style={{ maxWidth: "560px" }}
          >
            <div className="t-label" style={{ marginBottom: "12px" }}>
              The Ecosystem
            </div>
            <h2 className="t-display-md" style={{ lineHeight: 1.15 }}>
              Engineered for where{" "}
              <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>tension hides.</em>
            </h2>
            <p className="t-body-lg" style={{ marginTop: "10px", fontSize: "0.95rem" }}>
              Seven precision devices. One coherent restorative philosophy. Whisper-quiet, 
              cordless, and built to last.
            </p>
          </div>

          <Link
            href="/products"
            className="btn btn-ghost btn-sm elnor-catalog-cta"
            style={{ gap: "6px", flexShrink: 0 }}
          >
            <span>View Full Catalog (7)</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            paddingBottom: "18px",
            marginBottom: "24px",
            borderBottom: "1px solid var(--ink-08)",
          }}
        >
          {/* Category pills */}
          <div className="elnor-category-scroll" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {CATEGORIES.map((cat) => {
              const active = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  style={{
                    background: active ? "var(--ink)" : "var(--surface)",
                    color: active ? "#FFFFFF" : "var(--ink-60)",
                    border: `1.5px solid ${active ? "var(--ink)" : "var(--ink-08)"}`,
                    borderRadius: "var(--r-pill)",
                    padding: "6px 14px",
                    fontSize: "0.8rem",
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

          {/* Search */}
          <div className="elnor-search-box" style={{ position: "relative", width: "200px" }}>
            <Search
              size={13}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--ink-40)",
                pointerEvents: "none",
              }}
            />
            <input
              type="text"
              placeholder="Search devices..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input"
              style={{
                paddingLeft: "34px",
                height: "36px",
                borderRadius: "var(--r-pill)",
                border: "1.5px solid var(--ink-08)",
                fontSize: "0.8rem",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Product Grid */}
        {displayed.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "var(--ink-40)",
            }}
          >
            <p style={{ fontSize: "1.05rem", fontWeight: 500 }}>No devices found.</p>
            <button
              onClick={() => { setCategory("all"); setQuery(""); }}
              className="btn btn-ghost btn-sm"
              style={{ marginTop: "14px" }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {displayed.map((product, i) => (
              <div
                key={product.id}
                className={`reveal ${revealed ? "is-visible" : ""} reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* Explore Full Collection Banner (When showing 6 flagship items) */}
        {category === "all" && !query && (
          <div
            className={`elnor-discovery-banner reveal ${revealed ? "is-visible" : ""} reveal-delay-3`}
          >
            <div className="elnor-discovery-content">
              <div className="elnor-discovery-icon">
                <Layers size={18} />
              </div>
              <div>
                <div className="elnor-discovery-title">
                  Looking for More Devices?
                </div>
                <div className="elnor-discovery-sub">
                  Targeted lymphatic sculptors, lumbar heat pads, and ergonomic accessories.
                </div>
              </div>
            </div>

            <Link
              href="/products"
              className="btn btn-primary elnor-discovery-btn"
            >
              <span>Explore All Devices</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .elnor-discovery-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-radius: var(--r-xl);
          background: var(--surface);
          border: 1px solid var(--ink-08);
          gap: 16px;
          margin-top: 24px;
          box-shadow: var(--e-1);
        }

        .elnor-discovery-content {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .elnor-discovery-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--r-md);
          background: var(--bronze-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bronze);
          flex-shrink: 0;
        }

        .elnor-discovery-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.25;
        }

        .elnor-discovery-sub {
          font-size: 0.8rem;
          color: var(--ink-60);
          margin-top: 2px;
        }

        .elnor-discovery-btn {
          min-height: 40px;
          padding: 0 18px;
          font-size: 0.82rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .elnor-catalog-header {
            grid-template-columns: 1fr !important;
          }
          .elnor-catalog-cta {
            display: none !important;
          }
          .elnor-category-scroll {
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 4px;
            width: 100%;
          }
          .elnor-search-box {
            width: 100% !important;
          }
          .elnor-discovery-banner {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 14px 16px !important;
            gap: 12px !important;
            border-radius: var(--r-lg) !important;
          }
          .elnor-discovery-content {
            gap: 10px !important;
          }
          .elnor-discovery-icon {
            width: 30px !important;
            height: 30px !important;
          }
          .elnor-discovery-title {
            font-size: 0.95rem !important;
          }
          .elnor-discovery-sub {
            font-size: 0.74rem !important;
            line-height: 1.4 !important;
          }
          .elnor-discovery-btn {
            width: 100% !important;
            justify-content: center !important;
            min-height: 38px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
