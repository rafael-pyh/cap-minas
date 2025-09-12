import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const friends = localFont({
  variable: "--font-friends",
  src: [
    { path: "../fonts/Friends-Thin.ttf", weight: "100", style: "normal" },
    { path: "../fonts/Friends-UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../fonts/Friends-Normal.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Friends-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Friends-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Friends-UltraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/Friends-Black.ttf", weight: "900", style: "normal" },
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAP Minas",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
      },
    ],
  },
  description: "CAP Minas distribuidora de produtos alimentícios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${friends.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
