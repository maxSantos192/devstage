import "./globals.css";
import type { Metadata } from "next";
import { Oxanium, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Devstage",
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 bg-[url(/background.png)] bg-top bg-no-repeat text-gray-100 antialiased md:bg-right-top">
        {children}
      </body>
    </html>
  );
}
