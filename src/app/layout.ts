import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/shared/NavBar";
import Marquee from "@/components/shared/Marquee";
import Footer from "@/components/shared/Footer";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" data-theme="light" className={notoSansBengali.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <NavBar />
        <Marquee />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastContainer position="top-center" autoClose={2500} />
      </body>
    </html>
  );
}