import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ICCCA 2025",
  description: "Official website for the ICCCA-2025.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logos/iccsai_logo.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MaxWidthWrapper>
          <Navbar />
          {children}
          <Footer />
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
