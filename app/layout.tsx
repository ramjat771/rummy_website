import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rummy APK - Download & Play",
  description: "Play Rummy and win rewards",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#0f3d2e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f3d2e" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="bg-black">{children}</body>
    </html>
  );
}