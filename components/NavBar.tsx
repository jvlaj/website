"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";
import { siteNav } from "@/data/config/siteNav";

export default function NavBar() {
  const path = usePathname();

  return (
    <div
      className={clsx(
        "mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 px-4 py-6 md:flex-row md:items-center md:gap-4 md:py-8 lg:gap-6 xl:gap-10"
      )}
    >
      <nav
        aria-label="Primary"
        className="flex items-center gap-2 md:flex-row md:gap-4 lg:gap-6 xl:gap-8"
      >
        <ThemeToggle />
        {siteNav.items.map((item) => {
          const isActive =
            path === item.url ||
            (item.url !== "/" && path.startsWith(`${item.url}/`));
          const isDisabled = item.disabled;

          return (
            <Link
              key={item.title}
              href={!isDisabled ? item.url : "#"}
              aria-current={isActive ? "page" : undefined}
              tabIndex={isDisabled ? -1 : undefined}
              className={clsx(
                "rounded-full text-base font-medium transition-all duration-300",
                "transform hover:z-10 hover:-translate-y-1 hover:scale-110",
                "hover:bg-gray-800 hover:text-gray-300 dark:hover:bg-gray-200 dark:hover:text-gray-600",
                "rounded-full border border-gray-200 px-4 py-1.5 dark:border-slate-700",
                isDisabled && "cursor-not-allowed opacity-50",
                isActive && [
                  "bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800",
                ]
              )}
            >
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
      <div className="space-y-1 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
          Jason Vlajankov
        </h1>
        <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm md:text-base">
          Software Guy
        </p>
      </div>
    </div>
  );
}
