import type { Metadata } from "next";
import { Geist_Mono, Inter, Ibarra_Real_Nova } from "next/font/google";
import "./globals.css";
import { FadeInWrapper } from "./components/fadeInWrapper";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibarraRealNova = Ibarra_Real_Nova({
  variable: "--font-ibarra-real-nova",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke and Noah Clarke",
  description: "Directors and actors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${ibarraRealNova.variable} antialiased flex flex-col min-h-screen`}
      >
        <FadeInWrapper>
          {children}
        </FadeInWrapper>
      </body>
    </html>
  );
}
