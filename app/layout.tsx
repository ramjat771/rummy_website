import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rummy APK - Download & Play",
  description: "Play Rummy and win rewards",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}