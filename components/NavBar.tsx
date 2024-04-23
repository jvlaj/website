"use client";

import { NavItems } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";
import clsx from "clsx";

export default function NavBar({ items }: NavItems) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <div className="container flex flex-col gap-2 py-6 md:gap-4 md:flex-row md:items-center md:py-8 lg:gap-6 xl:gap-10 bg-gray-100">
      <nav className="order-last flex gap-2 md:flex-row md:ml-auto md:gap-4 lg:gap-6  xl:gap-8">
        {items.map((item, index) => (
          <Link
            key={index}
            href={!item.disabled ? item.url : "#"}
            className={clsx(
              "text-lg font-medium hover:underline hover:opacity-50 hover:transition-all text-gray-800 hover:text-gray-900 ",
              item.disabled && "cursor-not-allowed opacity-50",
              path === item.url && "underline",
              "flex-grow text-center"
            )}
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      <div className="space-y-2 text-center md:order-last md:text-left">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Jason Vlajankov</h1>
        <p className="text-gray-500 dark:text-gray-400">Software Guy</p>
      </div>
    </div>
  )
    ;
}
