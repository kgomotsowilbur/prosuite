import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const montserrat = Inter({ 
  subsets: ["latin"], 
  variable: "--font-montserrat"
});

const openSans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-open-sans"
});

export const metadata: Metadata = {
  title: "Prosuite",
  icons: {
    icon: ['/favicon.png'],
    shortcut: ['/favicon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}, ${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}
