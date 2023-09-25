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
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jason Vlajankov | jvlaj",
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
    "JavaScript",
  ],
  authors: [{ name: "Jason", url: "https://jvlaj.com" }],
  colorScheme: "light",
  creator: "Jason Vlajankov",
  publisher: "jvlaj.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "bg-gray-50 font-sans text-slate-900 antialiased",
        fontInter.variable
      )}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="mx-auto w-full max-w-screen-md p-4 md:w-[36rem] lg:w-[48rem]">
        <div className="container ">
          <NavBar items={siteNav.items} />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
