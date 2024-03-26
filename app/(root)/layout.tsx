import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Header />
      <body className={Poppins.variable}>{children}</body>
        <Footer />
    </html>
  );
}
