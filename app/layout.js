import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// PROFESSIONAL METADATA UPDATE
export const metadata = {
  title: "Falcon Security Ltd | Professional Security Services in Kamloops",
  description: "Elite security solutions in Kamloops, BC. Specializing in mobile patrols, static guarding, event security, and 24/7 alarm response.",
  metadataBase: new URL('https://falconsecurity.info'), // Helps resolve image paths
  openGraph: {
    title: "Falcon Security Ltd",
    description: "Professional Security Services in Kamloops, BC.",
    url: "https://falconsecurity.info",
    siteName: "Falcon Security Ltd",
    images: [
      {
        url: "/logo.jpg", 
        width: 1200,
        height: 630,
        alt: "Falcon Security Ltd Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falcon Security Ltd",
    description: "Elite security solutions in Kamloops, BC.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}