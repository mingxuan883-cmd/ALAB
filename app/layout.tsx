import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ZoomPreventer from "@/components/ZoomPreventer";

const ppFragment = localFont({
  src: [
    { path: "../public/fonts/PPFragment-GlareLight.otf",            weight: "300", style: "normal" },
    { path: "../public/fonts/PPFragment-GlareLightItalic.otf",      weight: "300", style: "italic" },
    { path: "../public/fonts/PPFragment-GlareRegular.otf",          weight: "400", style: "normal" },
    { path: "../public/fonts/PPFragment-GlareRegularItalic.otf",    weight: "400", style: "italic" },
    { path: "../public/fonts/PPFragment-GlareExtraBold.otf",        weight: "800", style: "normal" },
    { path: "../public/fonts/PPFragment-GlareExtraBoldItalic.otf",  weight: "800", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const circularStd = localFont({
  src: [
    { path: "../public/fonts/CircularStd-Light.otf",   weight: "300", style: "normal" },
    { path: "../public/fonts/CircularStd-Book.otf",    weight: "400", style: "normal" },
    { path: "../public/fonts/CircularStd-BookItalic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/CircularStd-Medium.otf",  weight: "500", style: "normal" },
    { path: "../public/fonts/CircularStd-Bold.otf",    weight: "700", style: "normal" },
    { path: "../public/fonts/CircularStd-Black.otf",   weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glodae — Glow With Your Gut Feeling",
  description:
    "Beat Bloating in 60 Minutes. The 4-in-1 Gut Science System designed for immediate comfort and built to last.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ppFragment.variable} ${circularStd.variable}`}>
      <body>
        <ZoomPreventer />
        {children}
      </body>
    </html>
  );
}
