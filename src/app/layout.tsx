import Footer from "@/components/Base/Footer";
import Header from "@/components/Base/Header";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import CustomMouse from "@/components/Base/CustomMouse";

const montserrat = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "longnguyen20it - Keep it up",
  description: "Welcome to my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="selection:bg-primary selection:text-black">
      <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CustomMouse />
      </body>
    </html>
  );
}
