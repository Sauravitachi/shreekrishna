import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShreeKrishna - Premium Signages & Branding Solutions",
  description: "Premium Signages, Custom Neon Lights, Name Plates, Branding, MDF Cutting & Acrylic Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05050a] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">{children}</body>
    </html>
  );
}
