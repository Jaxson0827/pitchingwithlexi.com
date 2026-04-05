import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pitching with Lexi | Private Softball Pitching Lessons",
  description:
    "One-on-one pitching instruction—private in-person and online lessons focused on mechanics, confidence, and longevity.",
  openGraph: {
    title: "Pitching with Lexi",
    description:
      "Private softball pitching lessons—in-person and online—with Lexi.",
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
      className={`${dmSans.variable} ${fraunces.variable} h-full scroll-pt-[4.5rem] antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
