import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const fontDisplay = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  display: "swap",
  variable: "--font-display",
  weight: "600",
  fallback: ["Inter", "system-ui", "sans-serif"],
});

export const fontVariables = `${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable}`;
