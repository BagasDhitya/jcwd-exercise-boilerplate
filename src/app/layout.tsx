import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JCWD Module 2 – UI Exercise Boilerplate",
  description:
    "A boilerplate project containing pre-built UI designs for students to implement frontend logic during JCWD Module 2 exercises.",
  authors: [{ name: "JCWD Team" }],
  keywords: [
    "JCWD",
    "UI Exercise",
    "Frontend Development",
    "Boilerplate",
    "Next.js",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "JCWD Module 2 – UI Exercise Boilerplate",
    description:
      "Navigate through UI design templates used in JCWD Frontend Development exercises.",
    url: "https://your-boilerplate-url.com",
    siteName: "JCWD UI Boilerplate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
