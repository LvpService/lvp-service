import type { Metadata } from "next";
import { Tenor_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

const tenorSans = Tenor_Sans({
  variable: "--font-tenor-sans",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LVP Service",
  description:
    "Prestations de nettoyage et jardinage professionnelles pour particuliers et entreprises en région parisienne et en Île-de-France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${tenorSans.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
