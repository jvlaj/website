import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import "@/styles/global.css";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import type { ReactNode } from "react";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "jvlaj",
  description:
    "Jason Vlajankov's personal software engineering portfolio website.",
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
  colorScheme: "light dark",
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

// Inline script to set initial theme before React hydration
const setInitialTheme = `(function() {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={fontInter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-slate-100 text-slate-800 antialiased dark:bg-slate-800 dark:text-slate-200">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
