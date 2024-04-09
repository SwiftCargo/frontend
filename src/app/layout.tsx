"use client";

import { Poppins, DM_Sans } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";
import Header from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();

  const isLoginPage = router === '/login';
  return (
    <html lang="en">
      <body className={cn("bg-surface-900 flex flex-col md:flex-row  gap-2 md:gap-[15px]", poppins.className, isLoginPage ? 'p-0' : 'p-1 md:p-1.5')}>
        {!isLoginPage && <Header />}
        {children}
      </body>
    </html>
  );
}

export async function generateMetaData() {
  return {
    title: 'Swift Cargo',
    openGraph: {
      images: ['/swift.png'],
    },
  }
}