"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  discountCode: string;
  applyDiscountCode: (code: string) => boolean;
  removeDiscountCode: () => void;
  shipping: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  notification: string | null;
  setNotification: (msg: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const FREE_SHIPPING_THRESHOLD = 1999;
export const STANDARD_SHIPPING_FEE = 149;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("elnor_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart from storage", e);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem("elnor_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to storage", e);
    }
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setNotification(`Added "${product.shortName}" to your ritual bag`);
    setTimeout(() => {
      setNotification(null);
    }, 3500);

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyDiscountCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === "RITUAL15") {
      setDiscountCode("RITUAL15 (15% OFF)");
      setDiscountPercent(0.15);
      return true;
    }
    if (clean === "ELNOR10") {
      setDiscountCode("ELNOR10 (10% OFF)");
      setDiscountPercent(0.1);
      return true;
    }
    if (clean === "WELCOME5") {
      setDiscountCode("WELCOME5 (5% OFF)");
      setDiscountPercent(0.05);
      return true;
    }
    return false;
  };

  const removeDiscountCode = () => {
    setDiscountCode("");
    setDiscountPercent(0);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discount = Math.round(subtotal * discountPercent);
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : STANDARD_SHIPPING_FEE;
  const amountNeededForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal
  );
  const total = Math.max(0, subtotal - discount + shipping);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discount,
        discountCode,
        applyDiscountCode,
        removeDiscountCode,
        shipping,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        total,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        notification,
        setNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
