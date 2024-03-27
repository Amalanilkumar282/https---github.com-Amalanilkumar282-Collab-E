import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', 
})

export const metadata: Metadata = {
  title: "Collab-E",
  description: "Web application to coordinate events exclusively created for KTU students.",
  icons:{
    icon:'/assets/images/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Header />
      <body className={poppins.variable}>{children}</body>
        <Footer />
    </html>
  );
}
