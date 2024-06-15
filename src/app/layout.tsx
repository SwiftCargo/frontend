import type { Metadata, Viewport  } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Golden Phoenix Express",
  description: "Golden Phoenix Express is a VTC founded on 24.05.2020 by HandOfClash. It was re-opened on 01.01.2022 with a new vision to create a family like VTC Experience for our drivers A family which is active, friendly and experienced while traversing the roads of Euro Truck Simulator 2 and American Truck Simulator."
};

export const viewport: Viewport = {
  themeColor: '#805100',
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
