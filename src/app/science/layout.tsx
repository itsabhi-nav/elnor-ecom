import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science of Quiet Restoration | ELNOR",
  description:
    "Explore the traditions, thermal engineering, quiet motors, skin-friendly materials, and USB-C power behind ELNOR wellness devices.",
  openGraph: {
    title: "Science of Quiet Restoration | ELNOR",
    description:
      "Ancient restorative traditions, translated into thoughtful thermal and kinetic wellness engineering.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ELNOR Science of Quiet Restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Science of Quiet Restoration | ELNOR",
    description: "Ancient restorative traditions, translated into thoughtful wellness engineering.",
    images: ["/opengraph-image"],
  },
};

export default function ScienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
