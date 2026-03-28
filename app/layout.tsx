import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NT Films | Nikhil Tuladhar – Photography & Videography Nepal",
  description:
    "Professional photographer and videographer based in Nepal. Specialising in weddings, events, portraits, cinematic films, and commercial work. Capturing moments, creating stories.",
  keywords: [
    "Nepal photographer",
    "Nepal videographer",
    "wedding photography Nepal",
    "Kathmandu photographer",
    "cinematic videography Nepal",
    "NT Films",
    "Nikhil Tuladhar",
  ],
  authors: [{ name: "Nikhil Tuladhar" }],
  openGraph: {
    title: "NT Films | Nikhil Tuladhar – Photography & Videography Nepal",
    description:
      "Professional photographer and videographer based in Nepal. Capturing moments, creating stories.",
    url: "https://ntfilms.vercel.app",
    siteName: "NT Films",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NT Films | Nikhil Tuladhar",
    description: "Professional photographer & videographer based in Nepal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#080808] text-[#f5f0e8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
