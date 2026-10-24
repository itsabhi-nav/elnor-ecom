import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import ProductModal from "@/components/ProductModal";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ELNOR | Smart Massage & Thermal Wellness Rituals",
  description:
    "ELNOR brings the calming wisdom of Japanese Onsen warmth and precision Shiatsu therapy into modern, whisper-quiet cordless wellness massagers. Official Amazon India partner.",
  keywords: [
    "ELNOR",
    "ELNOR massager",
    "electric head massager cap",
    "cervical neck pillow massager",
    "smart cupping therapy device",
    "heated eye massager bluetooth",
    "menstrual heating pad belt",
    "knee massager arthritis",
    "lymphatic drainage body massager",
    "Amazon India wellness",
  ],
  openGraph: {
    title: "ELNOR | Smart Kinetic Massage & Thermal Wellness Rituals",
    description:
      "Your Sanctuary of Quiet Restoration. Cordless 3D Shiatsu, Graphene Thermal Care, and 15-Minute Daily Rituals.",
    siteName: "ELNOR",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ELNOR — Smart Massage & Thermal Wellness Rituals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELNOR | Smart Kinetic Massage & Thermal Wellness Rituals",
    description: "Your sanctuary of quiet restoration — thermal care, precision massage, and everyday relief.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Cormorant Garamond + DM Mono for display / mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <CartDrawer />
          <ProductModal />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
