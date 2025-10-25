import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Compl-AI | Early Access",
  description: "Your in-house compliance partner, powered by Artificial Intelligence. AI-driven compliance for SRA regulated law firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
