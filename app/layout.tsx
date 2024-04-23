import { clsx } from "clsx";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import "../styles/global.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { siteNav } from "@/config/siteNav";
import Head from "next/head";
import { Metadata } from "next";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "jvlaj",
  description:
    "Jason Vlajankov's personal software engineering website, blog, and portfolio.",
  generator: "Next.js",
  applicationName: "jvlaj",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Jason",
    "Vlajankov",
    "Jason Vlajankov",
    "Portfolio",
    "Blog",
    "Software Engineering",
    "Website",
    "Next.js",
    "React",
    "JavaScript"
  ],
  authors: [{ name: "Jason", url: "https://jvlaj.com" }],
  colorScheme: "light",
  creator: "Jason Vlajankov",
  publisher: "jvlaj.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  }
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "font-sans antialiased",
        fontInter.variable
      )}
    >
    <Head>
      <link rel="icon" href="/favicon.ico" type="image/png" sizes="any" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body className="bg-gray-100">
    <NavBar items={siteNav.items} />
    {children}
    <Footer />
    <Analytics />
    </body>
    </html>
  );
}
