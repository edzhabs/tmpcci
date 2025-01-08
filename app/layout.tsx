import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talisay Mind Power Creativity Center Incorporated (TMPCCI)",
  description:
    "An educational institution devoted and dedicated in transforming minds, molding hearts and empowering.",
  keywords:
    "elementary school, education, pre, preschool, christian, child development, spiritual, leadership, light, grade school, day care, playgroup, rainbow, private school, talisay, tmpcci, cebu city",
  openGraph: {
    title: "Talisay Mind Power Creativity Center Incorporated (TMPCCI)",
    description:
      "An educational institution devoted and dedicated in transforming minds, molding hearts and empowering.",
    images: ["/images/tmpcci-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talisay Mind Power Creativity Center Incorporated (TMPCCI)",
    description:
      "An educational institution devoted and dedicated in transforming minds, molding hearts and empowering.",

    images: ["/images/tmpcci-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/tmpcci-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
