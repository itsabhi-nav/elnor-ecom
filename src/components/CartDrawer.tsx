"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, Check, ExternalLink } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    discountCode,
    applyDiscountCode,
    removeDiscountCode,
    shipping,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    total,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode) return;
    const success = applyDiscountCode(inputCode);
    if (success) {
      setCodeError("");
      setInputCode("");
    } else {
      setCodeError("Invalid code. Use 'RITUAL15' for 15% off.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "flex-end",
        background: "rgba(24, 23, 22, 0.45)",
        backdropFilter: "blur(8px)",
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          height: "100%",
          background: "var(--bg-canvas)",
          borderLeft: "1px solid var(--line-hairline)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          boxShadow: "var(--shadow-float)",
          animation: "slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--line-hairline)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "var(--bg-surface)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBag size={18} color="var(--text-ink)" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-ink)", fontFamily: "var(--font-sans)" }}>
              Your Ritual Bag
            </h3>
            <span
              style={{
                background: "var(--text-ink)",
                color: "#FFFFFF",
                fontSize: "0.72rem",
                fontWeight: 700,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cart.reduce((sum, i) => sum + i.quantity, 0)}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Bag"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-secondary)",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div
          style={{
            padding: "12px 24px",
            background: "var(--bg-stone-light)",
            borderBottom: "1px solid var(--line-hairline)",
            fontSize: "0.82rem",
          }}
        >
          {amountNeededForFreeShipping > 0 ? (
            <div style={{ color: "var(--text-body)" }}>
              Add{" "}
              <strong style={{ color: "var(--text-ink)" }}>
                ₹{amountNeededForFreeShipping.toLocaleString("en-IN")}
              </strong>{" "}
              more for <strong>Free Express Air Delivery</strong>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent-sage)", fontWeight: 600 }}>
              <Truck size={15} />
              <span>Free Express Delivery across India unlocked!</span>
            </div>
          )}
          <div
            style={{
              marginTop: "8px",
              height: "4px",
              width: "100%",
              background: "var(--bg-stone-deep)",
              borderRadius: "var(--radius-pill)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                background: "var(--accent-sage)",
                borderRadius: "var(--radius-pill)",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {checkoutSuccess ? (
            <div
              style={{
                textAlign: "center",
                padding: "48px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "var(--accent-sage-soft)",
                  color: "var(--accent-sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Check size={28} />
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "var(--text-ink)", fontFamily: "var(--font-sans)" }}>
                Order Confirmed
              </h3>
              <p style={{ color: "var(--text-body)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Thank you for choosing ELNOR. Your order is being prepped for air
                dispatch with live tracking updates sent via SMS &amp; email.
              </p>
              <button
                onClick={() => {
                  setCheckoutSuccess(false);
                  setIsCartOpen(false);
                }}
                className="btn-secondary-stone"
                style={{ marginTop: "12px" }}
              >
                Continue Browsing
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "64px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <ShoppingBag size={44} color="var(--text-muted)" />
              <h4 style={{ fontSize: "1.1rem", color: "var(--text-ink)", fontWeight: 650 }}>
                Your bag is empty
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", maxWidth: "260px" }}>
                Begin your daily restoration ritual with one of our 7 precision devices.
              </p>
              <Link
                href="/products"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary-ink"
                style={{ marginTop: "8px" }}
              >
                Explore Range
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "68px 1fr auto",
                  gap: "14px",
                  padding: "12px",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--line-hairline)",
                  borderRadius: "var(--radius-md)",
                  alignItems: "center",
                  boxShadow: "var(--shadow-subtle)",
                }}
              >
                <Link
                  href={`/products/${item.product.id}`}
                  onClick={() => setIsCartOpen(false)}
                  style={{
                    position: "relative",
                    width: "68px",
                    height: "68px",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    display: "block",
                    background: "var(--bg-stone-light)",
                  }}
                >
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    style={{ objectFit: "contain", padding: "4px" }}
                  />
                </Link>

                <div>
                  <Link
                    href={`/products/${item.product.id}`}
                    onClick={() => setIsCartOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <h4
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 650,
                        color: "var(--text-ink)",
                        lineHeight: 1.3,
                        marginBottom: "4px",
                      }}
                    >
                      {item.product.shortName}
                    </h4>
                  </Link>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "8px" }}>
                    ₹{item.product.price.toLocaleString("en-IN")} each
                  </div>

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
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--text-ink)",
                        padding: "3px 10px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                      }}
                    >
                      -
                    </button>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        minWidth: "16px",
                        textAlign: "center",
                        color: "var(--text-ink)",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--text-ink)",
                        padding: "3px 10px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "0.95rem", fontWeight: 750, color: "var(--text-ink)" }}>
                    ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label="Remove item"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      padding: "4px",
                    }}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Area */}
        {cart.length > 0 && !checkoutSuccess && (
          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px solid var(--line-hairline)",
              background: "var(--bg-surface)",
              boxShadow: "0 -4px 16px rgba(24, 23, 22, 0.05)",
            }}
          >
            {/* Promo Code */}
            <form onSubmit={handleApplyCode} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ position: "relative", flex: 1 }}>
                  <Tag
                    size={14}
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--text-muted)",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Promo code (e.g. RITUAL15)"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    style={{
                      width: "100%",
                      background: "var(--bg-stone-light)",
                      border: "1px solid var(--line-medium)",
                      borderRadius: "var(--radius-pill)",
                      padding: "8px 12px 8px 34px",
                      fontSize: "0.82rem",
                      color: "var(--text-ink)",
                      outline: "none",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-secondary-stone"
                  style={{ padding: "8px 16px", fontSize: "0.82rem", minHeight: "36px" }}
                >
                  Apply
                </button>
              </div>

              {discountCode && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "6px",
                    fontSize: "0.76rem",
                    color: "var(--accent-sage)",
                    fontWeight: 600,
                  }}
                >
                  <span>Applied: {discountCode} (15% OFF)</span>
                  <button
                    type="button"
                    onClick={removeDiscountCode}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
              {codeError && (
                <div style={{ color: "#DC2626", fontSize: "0.75rem", marginTop: "4px" }}>
                  {codeError}
                </div>
              )}
            </form>

            {/* Calculations */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              {discount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--accent-sage)", fontWeight: 600 }}>
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "var(--text-ink)",
                  paddingTop: "8px",
                  borderTop: "1px solid var(--line-hairline)",
                }}
              >
                <span>Total</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Solid Ink Checkout Button */}
            <button
              onClick={() => setCheckoutSuccess(true)}
              className="btn-primary-ink"
              style={{ width: "100%", padding: "14px", marginBottom: "8px", justifyContent: "center" }}
            >
              <span>Instant Checkout</span>
              <ArrowRight size={16} />
            </button>

            {/* Amazon Alternative */}
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amazon-pill"
              style={{ width: "100%", padding: "10px", justifyContent: "center" }}
            >
              <span>Checkout via Amazon.in</span>
              <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
