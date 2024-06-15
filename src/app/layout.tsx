import type { Metadata, Viewport  } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Swift Cargo",
  description: "Swift cargo was founded on 6 April 2024, our main job is realistics trucking and create good community",
  openGraph: {
    url: 'https://static.truckersmp.com/images/vtc/cover/swift-cargo.1718460788.jpg'
  }
};

export const viewport: Viewport = {
  themeColor: '#e65b05',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-surface-900 flex flex-col md:flex-row  gap-2 md:gap-[15px]", poppins.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
