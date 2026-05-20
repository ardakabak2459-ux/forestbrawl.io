import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForestBrawl.io - Orman Savas Oyunu",
  description: "Heyecan verici .io tarz orman savas oyunu. Karakterini sec ve savasa katil!",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "ForestBrawl.io",
    description: "Heyecan verici .io tarz orman savas oyunu",
    images: ["/opengraph.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#3a7d1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <body className="h-full overflow-hidden bg-[#3a7d1e]">{children}</body>
    </html>
  );
}
