import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/components/providers/ToastProvider";
import { ConfettiProvider } from "@/components/providers/ConfettiProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lam's Udemy clone",
  description: "Generated by NEXTJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider/>
          <ToastProvider/>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
