import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ececea",
};

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
  title: "Pitching with Lexi | Lexi Atcitty — Utah County Pitching Coach",
  description:
    "Former DI pitcher (BYU & UNM). Private 1-on-1 and 2-on-1 lessons, plus online check-ins—mechanics, power, pitch design, and confidence in the circle. Utah County.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "Pitching with Lexi | Lexi Atcitty",
    description:
      "Division I experience, 6+ years coaching pitchers in Utah County. Lessons focused on mechanics, explosiveness, and long-term development.",
    images: ["/logo.png"],
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
      className={`${dmSans.variable} ${fraunces.variable} h-full scroll-pt-16 antialiased md:scroll-pt-[4.5rem]`}
    >
      <body className="min-h-dvh min-h-full overflow-x-hidden font-sans pb-[env(safe-area-inset-bottom,0px)]">
        {children}
      </body>
    </html>
  );
}
