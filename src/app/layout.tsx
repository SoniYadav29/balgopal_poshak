import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | Premium Laddu Gopal Poshak & Shringar`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Explore elegant Laddu Gopal dresses, designer poshak, jewellery, pagdi, mukut and complete shringar sets. Contact us directly on WhatsApp to enquire and order.",
  keywords: [
    "Laddu Gopal dress",
    "Laddu Gopal poshak",
    "Bal Gopal dress",
    "Laddu Gopal jewellery",
    "Laddu Gopal shringar",
    "Laddu Gopal pagdi",
    "Laddu Gopal mukut",
    "Krishna dress for Laddu Gopal",
    "designer Laddu Gopal dress",
    "premium Laddu Gopal poshak",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Divine Poshak & Shringar`,
    description:
      "Discover handcrafted-inspired Laddu Gopal poshak, jewellery and shringar collections.",
    url: SITE_URL,
    images: [
      {
        url: "https://i.pinimg.com/1200x/65/9a/8f/659a8f1ce7c149b622d23df8fe782f7a.jpg",
        width: 1200,
        height: 630,
        alt: "Laddu Gopal poshak and shringar collection",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102d3b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
