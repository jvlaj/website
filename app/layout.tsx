import { clsx } from "clsx";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import "../styles/global.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { siteNav } from "@/config/siteNav";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "jvlaj.com",
  description: "Jason Vlajankov's personal website",
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
      <head />
      <body className="m-12 md:m-16 lg:m-20">
        <section className="container mx-auto my-auto items-center justify-center gap-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16 w-[24rem] md:w-[36rem] lg:w-[48rem] max-w-5xl">
        <NavBar items={siteNav.items} />
          {children}
        <Footer />
        </section>
        <Analytics />
      </body>
    </html>
  );
}
