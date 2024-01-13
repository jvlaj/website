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
    <nav className="container mx-auto mb-6 flex items-center justify-between">
      <div className="flex flex-grow justify-between">
        {items.map((item, index) => (
          <Link
            key={index}
            href={!item.disabled ? item.url : "#"}
            className={clsx(
              "rounded-md text-sm font-medium text-slate-800 hover:underline hover:opacity-50 hover:transition-all",
              item.disabled && "cursor-not-allowed opacity-50",
              path === item.url && "underline",
              "flex-grow text-center"
            )}
          >
              <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
