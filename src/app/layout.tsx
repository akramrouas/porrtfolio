import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import MobileNav from "@/components/navigation/mobile-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by Akram",
  icons:[
    {
      url: "/favicon.svg",
      href: "/favicon.svg",

    }
  ]
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth selection:bg-primary selection:text-white"
      suppressHydrationWarning
    >
      <body className={cn(
        "relative text-muted-foreground overflow-x-hidden",
        inter.className,
        geistSans.variable,
        geistMono.variable
      )}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          <MobileNav/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}