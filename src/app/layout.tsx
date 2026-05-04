import type { Metadata } from "next";
import { Inter, Geist, Khula, Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const khula = Khula({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-khula",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eduecho - Your Future, Our Guidance | Expert Education Consultancy",
  description: "Expert Education Consultancy Services. Study Abroad, Admission Guidance, Visa Services, Interview & Exam Preparation. Your Gateway to Global Education.",
  keywords: "education consultancy, study abroad, admission guidance, visa services, eduecho, career counseling",
};

import { Analytics } from "@vercel/analytics/next";
import FloatingContactButtons from "./smallComponents/FloatingContactButtons";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth light", "font-sans", geist.variable, khula.variable, nunitoSans.variable)}>
      <body className={`${inter.variable} antialiased font-sans bg-white text-black`}>
        {children}
        <Analytics />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
